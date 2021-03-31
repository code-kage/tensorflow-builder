(this.webpackJsonphtml=this.webpackJsonphtml||[]).push([[0],{15:function(e,n,a){},17:function(e,n,a){},19:function(e,n,a){"use strict";a.r(n);var i=a(2),r=a.n(i),t=a(9),o=a.n(t),s=(a(15),a(8)),l=a.n(s),_=a(10),c=a(3),d=a(5),u=a(1),m=(a(17),{layer_0:{id:"layer_0",name:"Input",pos:{x:306,y:12},connections:{inbound:[],outbound:["layer_1"]},arguments:{shape:"None",batch_size:"None",name:"None",dtype:"None",sparse:"False",tensor:"None",ragged:"False"}},layer_1:{id:"layer_1",name:"Dense",pos:{x:297,y:100},connections:{inbound:["layer_0"],outbound:["layer_7"]},arguments:{units:"REQUIRED",activation:"None",use_bias:"True",kernel_initializer:"glorot_uniform",bias_initializer:"zeros",kernel_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",kernel_constraint:"None",bias_constraint:"None"}},layer_7:{id:"layer_7",name:"Activation",pos:{x:315,y:182},connections:{inbound:["layer_1"],outbound:["layer_10"]},arguments:{}},layer_8:{id:"layer_8",name:"Activation",pos:{x:412,y:359},connections:{inbound:["layer_10"],outbound:["layer_11"]},arguments:{}},layer_9:{id:"layer_9",name:"Activation",pos:{x:571,y:521},connections:{inbound:["layer_11"],outbound:[]},arguments:{}},layer_10:{id:"layer_10",name:"Dense",pos:{x:358,y:276},connections:{inbound:["layer_7"],outbound:["layer_8"]},arguments:{units:"REQUIRED",activation:"None",use_bias:"True",kernel_initializer:"glorot_uniform",bias_initializer:"zeros",kernel_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",kernel_constraint:"None",bias_constraint:"None"}},layer_11:{id:"layer_11",name:"Dense",pos:{x:458,y:445},connections:{inbound:["layer_8"],outbound:["layer_9"]},arguments:{units:"REQUIRED",activation:"None",use_bias:"True",kernel_initializer:"glorot_uniform",bias_initializer:"zeros",kernel_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",kernel_constraint:"None",bias_constraint:"None"}}}),g={"core-layers":{name:"Core layers",layers:[{name:"Input",args:{shape:"None",batch_size:"None",name:"None",dtype:"None",sparse:"False",tensor:"None",ragged:"False"}},{name:"Dense",args:{units:"REQUIRED",activation:"None",use_bias:"True",kernel_initializer:"glorot_uniform",bias_initializer:"zeros",kernel_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",kernel_constraint:"None",bias_constraint:"None"}},{name:"Activation",args:{}},{name:"Embedding",args:{input_dim:"REQUIRED",output_dim:"REQUIRED",embeddings_initializer:"uniform",embeddings_regularizer:"None",activity_regularizer:"None",embeddings_constraint:"None",mask_zero:"False",input_length:"None"}},{name:"Masking",args:{}},{name:"Lambda",args:{}}]},"convolution-layers":{name:"Convolution layers",layers:[{name:"Conv1D",args:{filters:"REQUIRED",kernel_size:"REQUIRED",strides:"1",padding:"valid",data_format:"channels_last",dilation_rate:"1",groups:"1",activation:"None",use_bias:"True",kernel_initializer:"glorot_uniform",bias_initializer:"zeros",kernel_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",kernel_constraint:"None",bias_constraint:"None"}},{name:"Conv2D",args:{filters:"REQUIRED",kernel_size:"REQUIRED",strides:"(1 1)",padding:"valid",data_format:"None",dilation_rate:"(1 1)",groups:"1",activation:"None",use_bias:"True",kernel_initializer:"glorot_uniform",bias_initializer:"zeros",kernel_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",kernel_constraint:"None",bias_constraint:"None"}},{name:"Conv3D",args:{filters:"REQUIRED",kernel_size:"REQUIRED",strides:"(1 1 1)",padding:"valid",data_format:"None",dilation_rate:"(1 1 1)",groups:"1",activation:"None",use_bias:"True",kernel_initializer:"glorot_uniform",bias_initializer:"zeros",kernel_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",kernel_constraint:"None",bias_constraint:"None"}},{name:"SeparableConv1D",args:{filters:"REQUIRED",kernel_size:"REQUIRED",strides:"1",padding:"valid",data_format:"None",dilation_rate:"1",depth_multiplier:"1",activation:"None",use_bias:"True",depthwise_initializer:"glorot_uniform",pointwise_initializer:"glorot_uniform",bias_initializer:"zeros",depthwise_regularizer:"None",pointwise_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",depthwise_constraint:"None",pointwise_constraint:"None",bias_constraint:"None"}},{name:"SeparableConv2D",args:{filters:"REQUIRED",kernel_size:"REQUIRED",strides:"(1 1)",padding:"valid",data_format:"None",dilation_rate:"(1 1)",depth_multiplier:"1",activation:"None",use_bias:"True",depthwise_initializer:"glorot_uniform",pointwise_initializer:"glorot_uniform",bias_initializer:"zeros",depthwise_regularizer:"None",pointwise_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",depthwise_constraint:"None",pointwise_constraint:"None",bias_constraint:"None"}},{name:"DepthwiseConv2D",args:{kernel_size:"REQUIRED",strides:"(1 1)",padding:"valid",depth_multiplier:"1",data_format:"None",dilation_rate:"(1 1)",activation:"None",use_bias:"True",depthwise_initializer:"glorot_uniform",bias_initializer:"zeros",depthwise_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",depthwise_constraint:"None",bias_constraint:"None"}},{name:"Conv2DTranspose",args:{filters:"REQUIRED",kernel_size:"REQUIRED",strides:"(1 1)",padding:"valid",output_padding:"None",data_format:"None",dilation_rate:"(1 1)",activation:"None",use_bias:"True",kernel_initializer:"glorot_uniform",bias_initializer:"zeros",kernel_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",kernel_constraint:"None",bias_constraint:"None"}},{name:"Conv3DTranspose",args:{filters:"REQUIRED",kernel_size:"REQUIRED",strides:"(1 1 1)",padding:"valid",output_padding:"None",data_format:"None",dilation_rate:"(1 1 1)",activation:"None",use_bias:"True",kernel_initializer:"glorot_uniform",bias_initializer:"zeros",kernel_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",kernel_constraint:"None",bias_constraint:"None"}}]},"pooling-layers":{name:"Pooling layers",layers:[{name:"MaxPooling1D",args:{}},{name:"MaxPooling2D",args:{}},{name:"MaxPooling3D",args:{}},{name:"AveragePooling1D",args:{}},{name:"AveragePooling2D",args:{}},{name:"AveragePooling3D",args:{}},{name:"GlobalMaxPooling1D",args:{}},{name:"GlobalMaxPooling2D",args:{}},{name:"GlobalMaxPooling3D",args:{}},{name:"GlobalAveragePooling1D",args:{}},{name:"GlobalAveragePooling2D",args:{}},{name:"GlobalAveragePooling3D",args:{}}]},"recurrent-layers":{name:"Recurrent layers",layers:[{name:"LSTM",args:{units:"REQUIRED",activation:"tanh",recurrent_activation:"sigmoid",use_bias:"True",kernel_initializer:"glorot_uniform",recurrent_initializer:"orthogonal",bias_initializer:"zeros",unit_forget_bias:"True",kernel_regularizer:"None",recurrent_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",kernel_constraint:"None",recurrent_constraint:"None",bias_constraint:"None",dropout:"0.0",recurrent_dropout:"0.0",return_sequences:"False",return_state:"False",go_backwards:"False",stateful:"False",time_major:"False",unroll:"False"}},{name:"GRU",args:{units:"REQUIRED",activation:"tanh",recurrent_activation:"sigmoid",use_bias:"True",kernel_initializer:"glorot_uniform",recurrent_initializer:"orthogonal",bias_initializer:"zeros",kernel_regularizer:"None",recurrent_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",kernel_constraint:"None",recurrent_constraint:"None",bias_constraint:"None",dropout:"0.0",recurrent_dropout:"0.0",return_sequences:"False",return_state:"False",go_backwards:"False",stateful:"False",unroll:"False",time_major:"False",reset_after:"True"}},{name:"SimpleRNN",args:{units:"REQUIRED",activation:"tanh",use_bias:"True",kernel_initializer:"glorot_uniform",recurrent_initializer:"orthogonal",bias_initializer:"zeros",kernel_regularizer:"None",recurrent_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",kernel_constraint:"None",recurrent_constraint:"None",bias_constraint:"None",dropout:"0.0",recurrent_dropout:"0.0",return_sequences:"False",return_state:"False",go_backwards:"False",stateful:"False",unroll:"False"}},{name:"TimeDistributed",args:{}},{name:"Bidirectional",args:{}},{name:"ConvLSTM2D",args:{filters:"REQUIRED",kernel_size:"REQUIRED",strides:"(1 1)",padding:"valid",data_format:"None",dilation_rate:"(1 1)",activation:"tanh",recurrent_activation:"hard_sigmoid",use_bias:"True",kernel_initializer:"glorot_uniform",recurrent_initializer:"orthogonal",bias_initializer:"zeros",unit_forget_bias:"True",kernel_regularizer:"None",recurrent_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",kernel_constraint:"None",recurrent_constraint:"None",bias_constraint:"None",return_sequences:"False",return_state:"False",go_backwards:"False",stateful:"False",dropout:"0.0",recurrent_dropout:"0.0"}},{name:"Base RNN",args:{cell:"REQUIRED",return_sequences:"False",return_state:"False",go_backwards:"False",stateful:"False",unroll:"False",time_major:"False"}}]},"preprocessing-layers":{name:"Preprocessing layers",layers:[{name:"TextVectorization",args:{max_tokens:"None",standardize:"lower_and_strip_punctuation",split:"whitespace",ngrams:"None",output_mode:"int",output_sequence_length:"None",pad_to_max_tokens:"True",vocabulary:"None"}},{name:"Normalization",args:{}}]},"normalization-layers":{name:"Normalization layers",layers:[{name:"BatchNormalization",args:{axis:"-1",momentum:"0.99",epsilon:"0.001",center:"True",scale:"True",beta_initializer:"zeros",gamma_initializer:"ones",moving_mean_initializer:"zeros",moving_variance_initializer:"ones",beta_regularizer:"None",gamma_regularizer:"None",beta_constraint:"None",gamma_constraint:"None",renorm:"False",renorm_clipping:"None",renorm_momentum:"0.99",fused:"None",trainable:"True",virtual_batch_size:"None",adjustment:"None",name:"None"}},{name:"LayerNormalization",args:{axis:"-1",epsilon:"0.001",center:"True",scale:"True",beta_initializer:"zeros",gamma_initializer:"ones",beta_regularizer:"None",gamma_regularizer:"None",beta_constraint:"None",gamma_constraint:"None",trainable:"True",name:"None"}}]},"regularization-layers":{name:"Regularization layers",layers:[{name:"Dropout",args:{}},{name:"SpatialDropout1D",args:{}},{name:"SpatialDropout2D",args:{}},{name:"SpatialDropout3D",args:{}},{name:"GaussianDropout",args:{}},{name:"GaussianNoise",args:{}},{name:"ActivityRegularization",args:{}},{name:"AlphaDropout",args:{}}]},"attention-layers":{name:"Attention layers",layers:[{name:"MultiHeadAttention",args:{num_heads:"REQUIRED",key_dim:"REQUIRED",value_dim:"None",dropout:"0.0",use_bias:"True",output_shape:"None",attention_axes:"None",kernel_initializer:"glorot_uniform",bias_initializer:"zeros",kernel_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",kernel_constraint:"None",bias_constraint:"None"}},{name:"Attention",args:{}},{name:"AdditiveAttention",args:{}}]},"reshaping-layers":{name:"Reshaping layers",layers:[{name:"Reshape",args:{}},{name:"Flatten",args:{}},{name:"RepeatVector",args:{}},{name:"Permute",args:{}},{name:"Cropping1D",args:{}},{name:"Cropping2D",args:{}},{name:"Cropping3D",args:{}},{name:"UpSampling1D",args:{}},{name:"UpSampling2D",args:{}},{name:"UpSampling3D",args:{}},{name:"ZeroPadding1D",args:{}},{name:"ZeroPadding2D",args:{}},{name:"ZeroPadding3D",args:{}}]},"merging-layers":{name:"Merging layers",layers:[{name:"Concatenate",args:{}},{name:"Average",args:{}},{name:"Maximum",args:{}},{name:"Minimum",args:{}},{name:"Add",args:{}},{name:"Subtract",args:{}},{name:"Multiply",args:{}},{name:"Dot",args:{}}]},"locallyconnected-layers":{name:"Locally-connected layers",layers:[{name:"LocallyConnected1D",args:{filters:"REQUIRED",kernel_size:"REQUIRED",strides:"1",padding:"valid",data_format:"None",activation:"None",use_bias:"True",kernel_initializer:"glorot_uniform",bias_initializer:"zeros",kernel_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",kernel_constraint:"None",bias_constraint:"None",implementation:"1"}},{name:"LocallyConnected2D",args:{filters:"REQUIRED",kernel_size:"REQUIRED",strides:"(1 1)",padding:"valid",data_format:"None",activation:"None",use_bias:"True",kernel_initializer:"glorot_uniform",bias_initializer:"zeros",kernel_regularizer:"None",bias_regularizer:"None",activity_regularizer:"None",kernel_constraint:"None",bias_constraint:"None",implementation:"1"}}]},"activation-layers":{name:"Activation layers",layers:[{name:"ReLU",args:{}},{name:"Softmax",args:{}},{name:"LeakyReLU",args:{}},{name:"PReLU",args:{alpha_initializer:"zeros",alpha_regularizer:"None",alpha_constraint:"None",shared_axes:"None"}},{name:"ELU",args:{}},{name:"ThresholdedReLU",args:{}}]},"build-layers":{name:"Build Tools",layers:[{name:"Model",args:{}},{name:"Compile",args:{}},{name:"Train",args:{}}]}},N=a(0),E={line:"crosshair",delete:"no-drop",normal:"default",layer:"cell",move:"move"};function b(e){e.preventDefault(),document.getElementById("svg-canvas").innerHTML=document.getElementById("svg-canvas").innerHTML+"<line \n        id='".concat("line-"+window.__LINE_COUNTER,"' \n        x1=\"").concat(e.pageX,'" y1="').concat(e.pageY,'" \n        x2="').concat(e.pageX+1,'" y2="').concat(e.pageY+1,'" \n        stroke="#333" \n        stroke-width="2"\n        marker-end="url(#arrow)"\n      />'),window.__ACTIVE_LINE__={line:document.getElementById("line-"+window.__LINE_COUNTER)},window.__LINE_COUNTER++}function p(e){e.preventDefault()}function y(e){e.preventDefault();var n="layer_"+window.__LINE_COUNTER;window.layers[n]={id:n,name:window.__ACTIVE_LAYER__.name,pos:{x:e.pageX-90,y:e.pageY-30},connections:{inbound:[],outbound:[]},arguments:window.__ACTIVE_LAYER__.args},window.layersState(Object(u.a)({},window.layers)),window.__LINE_COUNTER++}function v(e){e.preventDefault(),window.__ACTIVE_ELEMENT__&&(document.getElementById("canvas").style.height=Math.max(window.innerHeight,e.pageY+50)+"px",window.__ACTIVE_ELEMENT__.target.style.left=e.pageX-80+"px",window.__ACTIVE_ELEMENT__.target.style.top=e.pageY-30+"px",window.__POS__={x:e.pageX-80,y:e.pageY-30})}function w(e){e.preventDefault(),window.__ACTIVE_LINE__&&(window.__ACTIVE_LINE__.line.x2.baseVal.value=e.pageX,window.__ACTIVE_LINE__.line.y2.baseVal.value=e.pageY)}var z={move:function(){document.getElementById("canvas").onmousemove=v,document.getElementById("canvas").onmousedown=void 0},line:function(){document.getElementById("canvas").onmousemove=w,document.getElementById("canvas").onmousedown=b},delete:function(){document.getElementById("canvas").onmousemove=void 0,document.getElementById("canvas").onmousedown=p},layer:function(){document.getElementById("canvas").onmousemove=void 0,document.getElementById("canvas").onmousedown=y},normal:function(){document.getElementById("canvas").onmousemove=void 0,document.getElementById("canvas").onmousedown=void 0}};function f(e){window.__MODE__!==e?(window.__MODE__=e,document.getElementById("canvas").style.cursor=E[window.__MODE__],z[e]&&z[e]()):(window.__MODE__="normal",document.getElementById("canvas").style.cursor="default",document.getElementById("canvas").onmousemove=void 0,document.getElementById("canvas").onmousedown=void 0)}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mode:void 0,layer:{name:"__LAYER__",args:{}}};"layer"===e.mode?"layer"!==window.__MODE__?(window.__MODE__="layer",document.getElementById("canvas").style.cursor=E[window.__MODE__],window.__ACTIVE_LAYER__=e.layer,z.layer()):window.__ACTIVE_LAYER__.name===e.layer.name?(window.__MODE__="normal",document.getElementById("canvas").style.cursor="default",window.__ACTIVE_LAYER__={name:void 0}):window.__ACTIVE_LAYER__=e.layer:f(e.mode)}var D=function(e){var n=r.a.useState(Object(u.a)({name:e.name,id:e._id},e.args)),a=Object(d.a)(n,2),i=a[0],t=a[1];return Object(N.jsxs)("div",{className:"menu",children:[Object(N.jsx)("div",{className:"name",children:i.name}),Object(N.jsx)("div",{className:"properties",children:Object.keys(i).map((function(e,n){return Object(N.jsxs)("div",{className:"property",children:[Object(N.jsxs)("div",{children:[" ",e," "]}),Object(N.jsx)("input",{name:"id",defaultValue:i.id,onKeyUp:function(e){return t(Object(u.a)(Object(u.a)({},i),{},{_id:e.target.value}))}})]},n)}))})]})},I=function(e){var n=Math.max(10+11*e.layer.name.length,150);return Object(N.jsx)("div",{id:"node-"+e.layer.id,className:"node",onMouseUp:function(e){e.target.style.cursor=E[window.__MODE__],"line"===window.__MODE__&&window.__NEW_EDGE__&&(window.__NEW_EDGE__.in=e.target.parentElement)},onMouseOver:function(e){e.target.style.cursor=E[window.__MODE__]},style:{top:e.layer.pos.y+"px",left:e.layer.pos.x+"px",width:"".concat(n,"px")},children:Object(N.jsx)("div",{className:"name",id:"name"+e.layer.id,onMouseDown:function(n){if(n.target.style.cursor=E[window.__MODE__],(n=n||window.event).preventDefault(),"line"===window.__MODE__)window.__NEW_EDGE__={out:n.target.parentElement};else if("delete"===window.__MODE__){var a=window.layers[e.layer.id].connections.inbound,i=window.layers[e.layer.id].connections.outbound;a.forEach((function(n){window.layers[n].connections.outbound.pop(e.layer.id),window.layers[n].connections.outbound=[].concat(Object(c.a)(window.layers[n].connections.outbound),Object(c.a)(i))})),i.forEach((function(n){window.layers[n].connections.inbound.pop(e.layer.id),window.layers[n].connections.inbound=[].concat(Object(c.a)(window.layers[n].connections.inbound),Object(c.a)(a))})),delete window.layers[e.layer.id],window.layersState(Object(u.a)({},window.layers))}else window.__ACTIVE_ELEMENT__={target:n.target.parentElement}},onDoubleClick:function(n){e.menuState({comp:Object(N.jsx)("div",{})}),e.menuState({comp:Object(N.jsx)(D,{x:n.pageX,y:n.pageY,name:n.target.innerText,_id:e.layer.id,args:e.layer.args})})},style:{width:"".concat(n-10,"px")},children:e.layer.name})},e._key)},j=function(e){var n=r.a.useState({}),a=Object(d.a)(n,2),i=a[0],t=a[1],o=r.a.useState({comp:Object(N.jsx)("div",{})}),s=Object(d.a)(o,2),E=s[0],b=s[1],p=r.a.useState(Object(u.a)({layerGroups:Object.keys(g)},g)),y=Object(d.a)(p,2),v=y[0],w=y[1];function z(e){v[e.target.id].visible=~v[e.target.id].visible,w(Object(u.a)({},v))}var f=function(e){return Object(N.jsx)("div",{className:"layers",style:{height:"45px",padding:"0 10px 0 10px"},children:Object(N.jsx)("div",{className:"name",id:e.id,style:{height:"45px"},onClick:e.toggleSection,children:e.layerGroup.name})},e.i)},D=function(e){return Object(N.jsxs)("div",{className:"layers",children:[Object(N.jsx)("div",{className:"name",id:e.id,onClick:e.toggleSection,children:e.layerGroup.name}),Object(N.jsx)("div",{className:"grid",children:e.layerGroup.layers.map((function(e,n){return Object(N.jsx)("div",{className:"btn",onClick:function(n){h({mode:"layer",layer:e})},id:"btn-del",children:e.name},n)}))})]},e.i)};function j(){return(j=Object(_.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(i),e.next=3,fetch("http://localhost/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(u.a)({},i))}).then((function(e){return e.json()})).then((function(e){var n=document.createElement("a");n.href="data:text/x-python,".concat(e.code),n.download="train.py",n.click()}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.useEffect((function(){var e=document.getElementById("svg-canvas");Array.apply(void 0,Object(c.a)(e.children)).forEach((function(n){return e.removeChild(n)})),e.innerHTML='<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"\n                            markerWidth="3.5" markerHeight="3.5"\n                            orient="auto-start-reverse">\n                            <path d="M 0 0 L 10 5 L 0 10 z" />\n                          </marker>',Object.keys(i).forEach((function(e){i[e].connections.inbound.forEach((function(n,a){document.getElementById("".concat(n,"->").concat(e))||(document.getElementById("svg-canvas").innerHTML=document.getElementById("svg-canvas").innerHTML+"<line id='".concat(n,"->").concat(e,"' \n                x1=\"").concat(i[n].pos.x+85,'" y1="').concat(i[n].pos.y+58,'" \n                x2="').concat(i[e].pos.x+85,'" y2="').concat(i[e].pos.y,'" \n                stroke="#333" \n                stroke-width="2"\n                marker-end="url(#arrow)"\n              />'))}))})),window.layers=i,window.layersState=t}),[i,t]),Object(N.jsxs)("div",{children:[E.comp,Object(N.jsxs)("div",{className:"nav",children:[Object(N.jsx)("div",{className:"title",children:"Tensorflow Builder 1.0.0"}),Object(N.jsx)("div",{className:"toolbar",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"btn named",onClick:function(e){h({mode:"delete"})},id:"btn-del",children:"Delete"}),Object(N.jsx)("div",{className:"btn named",onClick:function(e){h({mode:"line"})},id:"btn-lin",children:"Edge"}),Object(N.jsx)("div",{className:"btn named",onClick:function(e){h({mode:"move"})},id:"btn-del",children:"Move"}),Object(N.jsx)("div",{className:"btn named",onClick:function(e){h({mode:"normal"})},id:"btn-del",children:"Normal"})]})}),Object(N.jsx)("div",{className:"layergroups",children:v.layerGroups.map((function(e,n){return v[e].visible?Object(N.jsx)(D,{i:n,id:e,layerGroup:v[e],toggleSection:z},n):Object(N.jsx)(f,{i:n,id:e,layerGroup:v[e],toggleSection:z},n)}))}),Object(N.jsx)("div",{className:"bbtn",onClick:function(e){return j.apply(this,arguments)},children:"Build"}),Object(N.jsx)("div",{className:"bbtn",onClick:function(e){t(Object(u.a)({},m))},children:"Load Example"})]}),Object(N.jsxs)("div",{id:"canvas",className:"canvas",onMouseUp:function(e){if(window.__ACTIVE_LINE__)if(window.__NEW_EDGE__){var n=window.__NEW_EDGE__;if(n.in&&n.out&&n.in!==n.out){var a=n.in.id.split("-")[1],r=n.out.id.split("-")[1];i[a].connections.inbound.push(r),i[r].connections.outbound.push(a),document.getElementById("svg-canvas").removeChild(window.__ACTIVE_LINE__.line),t(Object(u.a)({},i)),window.__NEW_EDGE__=void 0}else document.getElementById("svg-canvas").removeChild(window.__ACTIVE_LINE__.line)}else document.getElementById("svg-canvas").removeChild(window.__ACTIVE_LINE__.line);else if(window.__ACTIVE_ELEMENT__&&window.__POS__){var o=window.__ACTIVE_ELEMENT__.target.id.split("-")[1];i[o].pos=window.__POS__,t(Object(u.a)({},i))}window.__ACTIVE_ELEMENT__=void 0,window.__ACTIVE_LINE__=void 0,b({comp:Object(N.jsx)("div",{})})},children:[Object.keys(i).map((function(e,n){return Object(N.jsx)(I,{layer:i[e],menuState:b},n)})),Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",id:"svg-canvas"})]})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(n){var a=n.getCLS,i=n.getFID,r=n.getFCP,t=n.getLCP,o=n.getTTFB;a(e),i(e),r(e),t(e),o(e)}))};window.__ACTIVE_LAYER__={name:void 0},window.__MOUSE_ACTION__=void 0,window.__ACTIVE_ELEMENT__=void 0,window.__ACTIVE_LINE__=void 0,window.__EDGE__=void 0,window.__NEW_EDGE__=void 0,window.__LINE_COUNTER=0,window.__LAYER_COUNTER=0,window.__MODE__="normal",window.__POS__=void 0,window.__ACTIVE_LAYER__=void 0,o.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(j,{})}),document.getElementById("root")),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.f2e4e076.chunk.js.map