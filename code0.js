gdjs.LoadCode = {};
gdjs.LoadCode.localVariables = [];
gdjs.LoadCode.GDNewSpriteObjects1= [];
gdjs.LoadCode.GDNewSpriteObjects2= [];
gdjs.LoadCode.GDNewTextObjects1= [];
gdjs.LoadCode.GDNewTextObjects2= [];
gdjs.LoadCode.GDLeafSpawnerObjects1= [];
gdjs.LoadCode.GDLeafSpawnerObjects2= [];
gdjs.LoadCode.GDLevelEditorObjects1= [];
gdjs.LoadCode.GDLevelEditorObjects2= [];


gdjs.LoadCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), false);
}}

}


};

gdjs.LoadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadCode.GDNewSpriteObjects1.length = 0;
gdjs.LoadCode.GDNewSpriteObjects2.length = 0;
gdjs.LoadCode.GDNewTextObjects1.length = 0;
gdjs.LoadCode.GDNewTextObjects2.length = 0;
gdjs.LoadCode.GDLeafSpawnerObjects1.length = 0;
gdjs.LoadCode.GDLeafSpawnerObjects2.length = 0;
gdjs.LoadCode.GDLevelEditorObjects1.length = 0;
gdjs.LoadCode.GDLevelEditorObjects2.length = 0;

gdjs.LoadCode.eventsList0(runtimeScene);
gdjs.LoadCode.GDNewSpriteObjects1.length = 0;
gdjs.LoadCode.GDNewSpriteObjects2.length = 0;
gdjs.LoadCode.GDNewTextObjects1.length = 0;
gdjs.LoadCode.GDNewTextObjects2.length = 0;
gdjs.LoadCode.GDLeafSpawnerObjects1.length = 0;
gdjs.LoadCode.GDLeafSpawnerObjects2.length = 0;
gdjs.LoadCode.GDLevelEditorObjects1.length = 0;
gdjs.LoadCode.GDLevelEditorObjects2.length = 0;


return;

}

gdjs['LoadCode'] = gdjs.LoadCode;
