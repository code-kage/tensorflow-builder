import React from "react";
import { metaAppFunctions, metaHome, metaAppData } from "../Meta/index";
import { icons } from "../data/icons";
import { get, Loading, post, pull, push, ROOT } from "../Utils";

function _optionPair(option = "Option", problem_types = []) {
  return {
    name: option.toLowerCase(),
    value: option,
    problems: problem_types,
  };
}

const dataTypes = [
  _optionPair("select", []),
  _optionPair("image", [
    "Classification",
    "ObjectDetection",
    "Segmentation",
    "StyleTransfer",
    "Colorization",
    "Reconstruction",
    "SuperResolution",
  ]),
  _optionPair("text", [
    "Classification",
    "LanguageModeling",
    "CaptionGeneration",
    "MachineTranslation",
    "DocumentSummarization",
    "QuestionAnswering",
  ]),
  _optionPair("csv", ["Classification", "Regression"]),
];

const WorkspaceCard = (props = { name: "Hello", appData: metaAppData }) => {
  function loadMenu(e) {
    props.appData.popUpState(
      <div
        className="workspace-card-context"
        style={{ top: e.clientY - 5, left: e.clientX - 5, cursor: "default" }}
        onMouseLeave={(e) => props.appData.popUpState(<div></div>)}
      >
        <div
          className="btn"
          onClick={(e) => props.openWorkspace({ name: props.name })}
        >
          Open
        </div>
        <div className="btn">Renane</div>
        <div className="btn">Duplicate</div>
        <div
          className="btn"
          onClick={(e) => props.deleteWorkspace({ name: props.name })}
        >
          Delete
        </div>
      </div>
    );
  }
  return (
    <div
      className="card"
      onDoubleClick={(e) => props.openWorkspace({ name: props.name })}
    >
      <div className="image"></div>
      <div className="footer">
        <div className="name">
          {props.name}
          <icons.More onClick={loadMenu} />
        </div>
      </div>
    </div>
  );
};

const DownloadModel = (
  props = {
    appData: metaAppData,
    appFunctions: metaAppFunctions,
  }
) => {
  async function downloadModel(
    options = { format: "Format", download: "download.format" }
  ) {
    let { format, download } = options;
    renderState(<Loading />);
    post({
      path: "/workspace/download",
      data: {
        format: format,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          renderState(
            <div className="option output">
              <a
                href={`${ROOT}/workspace/download/${download}`}
                onClick={(e) => props.appData.popUpState(<div></div>)}
                download={download}
              >
                {" "}
                Click To Download Model{" "}
              </a>
            </div>
          );
        } else {
          renderState(
            <div className="option">Error Occured While Building Model</div>
          );
        }
      });
  }

  let [render, renderState] = React.useState(
    <div className="options">
      <div className="title option">Select Format</div>
      <div
        className="option"
        onClick={(e) =>
          downloadModel({ format: "json", download: "model.json" })
        }
      >
        json
      </div>
      <div
        className="option"
        onClick={(e) =>
          downloadModel({ format: "json_w", download: "model.zip" })
        }
      >
        json with weights
      </div>
      <div
        className="option"
        onClick={(e) => downloadModel({ format: "pb", download: "model.zip" })}
      >
        pb
      </div>
      <div
        className="option"
        onClick={(e) =>
          downloadModel({ format: "hdf5", download: "model.hdf5" })
        }
      >
        hdf5
      </div>
    </div>
  );

  return (
    <div className="popup download-model">
      <div className="exit">Press Esc to exit.</div>
      {render}
    </div>
  );
};

const NewCard = (
  props = { appData: metaAppData, openWizard: function () {} }
) => {
  return (
    <div className="card new" onClick={props.openWizard}>
      <icons.Add />
    </div>
  );
};

const NewWorkspaceWizard = (
  props = {
    appData: metaAppData,
    appFunctions: metaAppFunctions,
    popUpState: function () {},
    createWorkspace: function () {},
  }
) => {
  let [newworkspace, newworkspaceState] = React.useState({
    name: "",
    datatype: "select",
    problemtype: "select",
  });
  let [problemtypes, probtypesState] = React.useState([]);

  return (
    <div className="new-workspace">
      <div className="card">
        <div className="title">
          New Worksapce
          <span className="close" onClick={(e) => props.popUpState(undefined)}>
            ❌
          </span>
        </div>
        <div className="body">
          <div className="field">
            <div className="name">Name</div>
            <input
              className="text"
              placeholder={"Workspace Name"}
              defaultValue={newworkspace.name}
              onChange={(e) =>
                newworkspaceState({
                  ...newworkspace,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="field">
            <div className="name">Data</div>
            <select
              className="options"
              defaultValue={newworkspace.name}
              onChange={(e) => {
                newworkspaceState({
                  ...newworkspace,
                  datatype: e.target.value,
                });
                dataTypes.forEach((type) => {
                  if (type.value === e.target.value) {
                    probtypesState([...type.problems]);
                  }
                });
              }}
            >
              {dataTypes.map((option, i) => {
                return (
                  <option value={option.value} key={i}>
                    {option.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="field">
            <div className="name">Problem</div>
            <select
              className="options"
              defaultValue={newworkspace.name}
              onChange={(e) =>
                newworkspaceState({
                  ...newworkspace,
                  problemtype: e.target.value,
                })
              }
            >
              <option value="select">Select</option>
              {problemtypes.map((option, i) => {
                return (
                  <option value={option} key={i}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
          <button onClick={(e) => props.createWorkspace(newworkspace)}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

const LoadingOverlay = (props) => {
  return (
    <div className="loading-overlay">
      <Loading />
    </div>
  );
};

const Home = (
  props = {
    appData: metaAppData,
  }
) => {
  let { popUpState, notify } = props.appData;
  let [home, homeState] = React.useState(metaHome);

  async function pullHome() {
    pull({
      name: "home",
    }).then(async (homeData) => {
      await get({
        path: "/workspace/all",
      })
        .then((response) => response.json())
        .then((your_work) => {
          homeState({ ...homeData, your_work: your_work });
        });
    });
  }

  async function newWorkspace(
    data = { name: "workspace", datatype: "select", problemtype: "select" }
  ) {
    if (data.name === "") {
      notify({
        message: "Please enter workspace name !",
        type: "error",
        timeout: 3000,
      });
    } else if (data.datatype === "select") {
      notify({
        message: "Please select data type !",
        type: "error",
        timeout: 3000,
      });
    } else if (data.problemtype === "select") {
      notify({
        message: "Please select problem type !",
        type: "error",
        timeout: 3000,
      });
    } else {
      await post({
        path: "/workspace/new",
        data: data,
      })
        .then((response) => response.json())
        .then((response) => {
          notify({
            message: response.message,
            type: response.status ? "success" : "error",
            timeout: 3000,
          });
          if (response.status) {
            pullHome();
            props.appData.appState({ ...props.appData.app, fetch: true });
            popUpState(undefined);
          }
        });
    }
  }

  async function openWorkspace(options = { name: "workspace" }) {
    popUpState(<LoadingOverlay />);
    await post({
      path: `/workspace/open/${options.name}`,
      data: {},
    })
      .then((response) => response.json())
      .then(async function (data) {
        await pullHome();
        props.appData.app.fetch = true;
        props.appData.appState({ ...props.appData.app });
        popUpState(undefined);
      });
  }

  async function deleteWorkspace(options = { name: "workspace" }) {
    popUpState(undefined);
    if (options.name === home.active.name) {
      notify({
        message: "Cannot delete active workspace.",
        type: "error",
      });
    } else {
      await post({
        path: `/workspace/delete/${encodeURIComponent(options.name)}`,
        data: {},
      })
        .then((response) => response.json())
        .then(async function (data) {
          notify({
            message: data.message,
            type: data.status ? "success" : "error",
            timeout: 3000,
          });
          if (data.status) {
            pullHome();
          }
        });
    }
  }

  React.useEffect(() => {
    if (home.fetch) {
      pullHome();
    } else {
      push({
        name: "home",
        data: home,
      });
    }
  }, []);

  return (
    <div className="home container">
      <div className="name">Active Worksapce</div>
      <div className="card active">
        <div className="head">{home.active.name}</div>
        <div className="footer">
          <div className="name">
            <icons.Save onClick={(e) => props.appFunctions.autosave()} />
            <icons.Code onClick={(e) => props.appFunctions.downloadCode()} />
            <icons.Download onClick={(e) => {popUpState(<DownloadModel {...props} />)}}/>
            <icons.Delete onClick={(e) => { deleteWorkspace({ name: home.active.name })}}/>
          </div>
        </div>
      </div>
      <div className="name">Your Work</div>
      <div className="card-grid">
        <div className="cards">
          <NewCard
            openWizard={function () {
              popUpState(
                <NewWorkspaceWizard
                  popUpState={popUpState}
                  createWorkspace={newWorkspace}
                />
              );
            }}
          />
          {home.your_work.map((work, i) => {
            return (
              <WorkspaceCard
                {...props}
                {...work}
                openWorkspace={openWorkspace}
                deleteWorkspace={deleteWorkspace}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};



export default Home;
