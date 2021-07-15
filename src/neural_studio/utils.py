import zipfile
import numpy as np
import base64 as b64
import cv2
import psutil
import GPUtil

from os import path as pathlib, mkdir, chdir
from shutil import rmtree
from glob import glob

class Workspace:
    pass

class Trainer:
    pass

def get_hardware_utilization() -> dict:
    gpu, = GPUtil.getGPUs()
    cpu_load  = psutil.cpu_percent() 
    cpu_ram  = psutil.virtual_memory().percent
    gpu_load  = gpu.load*100
    gpu_ram = 100 * gpu.memoryUsed / gpu.memoryTotal
    usage_string = f"cpu : {cpu_load}% | memory : {cpu_ram} | gpu : {gpu_load}% | gpu memory : {gpu_ram}%"
    return {
        "cpu":cpu_load,
        "memory":cpu_ram,
        "gpu": gpu_load,
        "gpu_memory":gpu_ram,
        "usage_string": usage_string
    }



def numpy_image_to_b64(image: np.ndarray)->str:
    image = (image * ( 255 if image.max() <= 1 else 1)).astype(np.uint8)
    _, buffer = cv2.imencode(".png", image)
    return "data:image/gif;base64,"+b64.b64encode(buffer).decode()

def generate_args(code: str) -> dict:
    exec(code,)
    ret = locals()
    ret.pop("code")
    return ret


def download_json(workspace: Workspace, trainer: Trainer) -> dict:
    temp_dir = pathlib.join(workspace.__path__, "outputs")
    if pathlib.isdir(temp_dir):
        rmtree(temp_dir)
    mkdir(temp_dir)
    
    with open(pathlib.join(workspace.__path__, 'outputs', 'model.json'), "w+") as file:
        file.write(trainer.model.to_json())
    return {
        "message": "Downloading Model",
        "status": True
    }


def download_json_w(workspace: Workspace, trainer: Trainer) -> dict:
    temp_dir = pathlib.join(workspace.__path__, "outputs")
    if pathlib.isdir(temp_dir):
        rmtree(temp_dir)
    mkdir(temp_dir)

    temp_dir = pathlib.join(workspace.__path__, "outputs", "model")
    if pathlib.isdir(temp_dir):
        rmtree(temp_dir)
    mkdir(temp_dir)

    with open(pathlib.join(temp_dir, 'model.json'), "w+") as file:
        file.write(trainer.model.to_json())
    trainer.model.save_weights(pathlib.join(temp_dir, 'model'))
    chdir(pathlib.join(workspace.__path__, "outputs",))
    with zipfile.ZipFile('model.zip', 'w') as zfile:
        for f in glob("./model/*"):
            zfile.write(f)
    return {
        "message": "Downloading Model",
        "status": True
    }


def download_pb(workspace: Workspace, trainer: Trainer) -> dict:
    temp_dir = pathlib.join(workspace.__path__, "outputs")
    if pathlib.isdir(temp_dir):
        rmtree(temp_dir)
    mkdir(temp_dir)

    temp_dir = pathlib.join(workspace.__path__, "outputs", "model")
    if pathlib.isdir(temp_dir):
        rmtree(temp_dir)
    mkdir(temp_dir)
    trainer.model.save(temp_dir)
    chdir(pathlib.join(workspace.__path__, "outputs",))
    with zipfile.ZipFile('model.zip', 'w') as zfile:
        for f in glob("./model/*"):
            zfile.write(f)
        for f in glob("./assets/*"):
            zfile.write(f)
        for f in glob("./variables/*"):
            zfile.write(f)
    
    return {
        "message": "Downloading Model",
        "status": True
    }


def download_hdf5(workspace: Workspace, trainer: Trainer) -> dict:
    temp_dir = pathlib.join(workspace.__path__, "outputs")
    if pathlib.isdir(temp_dir):
        rmtree(temp_dir)
    mkdir(temp_dir)
    temp_dir = pathlib.join(workspace.__path__, "outputs", "model.hdf5")
    trainer.model.save(temp_dir)
    return {
        "message": "Downloading Model",
        "status": True
    }

download_options = {
    "json": download_json,
    "json_w": download_json_w,
    "pb": download_pb,
    "hdf5": download_hdf5
}