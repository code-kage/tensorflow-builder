import React from "react";
import Editor from "@monaco-editor/react";
import Options from '../data/options';

import './menu.css'


const TextProperty = (props) =>{
    let property = props.layers[props.layer_id].arguments[props.name];
    return (
      <div className="property" >
        <div> {props.name} </div>
        <input 
          name={props.layer_id+props.name}
          id = {props.layer_id+props.name}
          defaultValue={property.value} 
          onKeyUp={e=>{
              props.layers[props.layer_id].arguments[props.name].value = e.target.value;
              props.layersState({
                ...props.layers
              })
            }
          } 
        />
      </div>
    )
  }
  
const ListProperty = (props) => {
  let property = props.layers[props.layer_id].arguments[props.name];
  let options = Options[property.options];

  return (
    <div className="property" >
      <div> {props.name} </div>
      <select 
        name={props.layer_id+props.name}
        id = {props.layer_id+props.name}
        defaultValue={property.value} 
        onChange={(e)=>{
          props.layers[props.layer_id].arguments[props.name].value = e.target.value;
          props.layersState({
            ...props.layers
          }) 
      }}
        >
        {
          options.map((option,i)=>{
            return (
              <option   
                key={i}
                name={option}
              > 
                {option} 
              </option>
            )
          })
        }
      </select>
    </div>
  )
}

const CheckboxProperty = (props) => {
  let property = props.layers[props.layer_id].arguments[props.name];
  let options = Options[property.options];

  function selectBox(e){
    if (props.layers[props.layer_id].arguments[props.name].value.lastIndexOf(e.target.name) > -1){
      props.layers[props.layer_id].arguments[props.name].value.pop(e.target.name)
    }
    else{
      props.layers[props.layer_id].arguments[props.name].value.push(e.target.name)
    }
    // console.log(props.layers[props.layer_id].arguments[props.name].value)

    props.layersState({
      ...props.layers
    }) 
  }
  return (
    <div className="property" style={{height:"auto"}}>
      <div> {props.name} </div>
      <div className="checkboxes">
        {
          options.map((option,i)=>{
            return (
              <label className='checkbox' key={i}>
                <input 
                  type="checkbox" 
                  name={option} 
                  key={i}  
                  defaultChecked={ 
                    props.
                    layers[props.layer_id].
                    arguments[props.name].
                    value.
                    lastIndexOf(option) > -1 }
                  onChange={selectBox}
                 /> 
                {option}
              </label>
            )
          })        
        }
      </div>
    </div>
  )
}

const Dataset = (props) =>{
  let { config } = props;

  function updateCode(e){
    props.layers[config.id].arguments.dataset.value = e;
    props.layersState({
      ...props.layers
    })
  }

  React.useEffect(()=>{
    props.layers[config.id].arguments.dataset.value = config.arguments.dataset.value.lastIndexOf("__id__") > 0 ?
      config.arguments.dataset.value.replaceAll(/__id__/g,config.id)
      :
      config.arguments.dataset.value
    
    props.layersState({
      ...props.layers
    })
  })

  return (
    <div className="dataset">
      <div className="head">
        <input  defaultValue={ config.name } />
        <div className="btn" onClick={e=>{
              props.menuState({comp:<div />})
            }
          }
          >
          Save
        </div>
      </div>
      <Editor
          defaultLanguage="python"
          defaultValue={ 
            config.arguments.dataset.value.lastIndexOf("__id__") > 0 ?
              config.arguments.dataset.value.replaceAll(/__id__/g,config.id)
              :
              config.arguments.dataset.value 
          }
          onChange={updateCode}
      />
    </div>
  )
}


const Menu = (props) => {
  // console.log(props.layer.arguments)
  return props.layer.type.name === 'Dataset' ?
      (
        <Dataset 
          config={props.layer}

          layers={props.layers}
          layersState={props.layersState}
          menu={props.menu}
          menuState={props.menuState}
        />
      )
      :
      (
        <div className="menu">
          <div className="name">{props.layer.name}</div>
          <div className="properties">
            
            <div className="property" >
              <div> {props.layer.name} </div>
              <input
                name="id"
                defaultValue={props.layer.name}
                onKeyUp={(e) => {
                  props.layers[props.layer.id].name = e.target.value;
                  props.layersState({
                    ...props.layers
                  })
                }}
              />
            </div>

            <div className="property">
              <div> {props.layer.id} </div>
              <input
                name="id"
                defaultValue={props.layer.id}
              />
            </div>
            {Object.keys(props.layer.arguments).map((property, i) => {
              let comp;
              switch (props.layer.arguments[property].render) {
                case "text":
                  return (
                    <TextProperty
                      layer_id={props.layer.id}
                      name={property}
                      key={i}

                      layers={props.layers}
                      layersState={props.layersState}
                      menu={props.menu}
                      menuState={props.menuState}
                    />
                  );
                case "list":
                  return (
                    <ListProperty
                      layer_id={props.layer.id}
                      name={property}
                      key={i}

                      layers={props.layers}
                      layersState={props.layersState}
                      menu={props.menu}
                      menuState={props.menuState}
                    />
                  );
                case "checkbox":
                  return (
                    <CheckboxProperty
                      layer_id={props.layer.id}
                      name={property}
                      key={i}

                      layers={props.layers}
                      layersState={props.layersState}
                      menu={props.menu}
                      menuState={props.menuState}
                    />
                  );
              }
            })}
          </div>
        </div>
      )

};

export default Menu;
