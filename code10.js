gdjs.WorldMapCode = {};
gdjs.WorldMapCode.localVariables = [];
gdjs.WorldMapCode.GDLevel2Objects1= [];
gdjs.WorldMapCode.GDLevel2Objects2= [];
gdjs.WorldMapCode.GDNewSprite2Objects1= [];
gdjs.WorldMapCode.GDNewSprite2Objects2= [];
gdjs.WorldMapCode.GDNewSprite3Objects1= [];
gdjs.WorldMapCode.GDNewSprite3Objects2= [];
gdjs.WorldMapCode.GDLevel1Objects1= [];
gdjs.WorldMapCode.GDLevel1Objects2= [];
gdjs.WorldMapCode.GDNewSpriteObjects1= [];
gdjs.WorldMapCode.GDNewSpriteObjects2= [];
gdjs.WorldMapCode.GDLeafSpawnerObjects1= [];
gdjs.WorldMapCode.GDLeafSpawnerObjects2= [];
gdjs.WorldMapCode.GDLevelEditorObjects1= [];
gdjs.WorldMapCode.GDLevelEditorObjects2= [];


gdjs.WorldMapCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.WorldMapCode.GDLevel1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WorldMapCode.GDLevel1Objects1.length;i<l;++i) {
    if ( gdjs.WorldMapCode.GDLevel1Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WorldMapCode.GDLevel1Objects1[k] = gdjs.WorldMapCode.GDLevel1Objects1[i];
        ++k;
    }
}
gdjs.WorldMapCode.GDLevel1Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("LevelDEMO2");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Load", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.WorldMapCode.GDLevel2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WorldMapCode.GDLevel2Objects1.length;i<l;++i) {
    if ( gdjs.WorldMapCode.GDLevel2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WorldMapCode.GDLevel2Objects1[k] = gdjs.WorldMapCode.GDLevel2Objects1[i];
        ++k;
    }
}
gdjs.WorldMapCode.GDLevel2Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("LevelDEMO3");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Load", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.WorldMapCode.GDLevel2Objects1);
{for(var i = 0, len = gdjs.WorldMapCode.GDLevel2Objects1.length ;i < len;++i) {
    gdjs.WorldMapCode.GDLevel2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("LevelDEMO2");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Load", false);
}}

}


};

gdjs.WorldMapCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WorldMapCode.GDLevel2Objects1.length = 0;
gdjs.WorldMapCode.GDLevel2Objects2.length = 0;
gdjs.WorldMapCode.GDNewSprite2Objects1.length = 0;
gdjs.WorldMapCode.GDNewSprite2Objects2.length = 0;
gdjs.WorldMapCode.GDNewSprite3Objects1.length = 0;
gdjs.WorldMapCode.GDNewSprite3Objects2.length = 0;
gdjs.WorldMapCode.GDLevel1Objects1.length = 0;
gdjs.WorldMapCode.GDLevel1Objects2.length = 0;
gdjs.WorldMapCode.GDNewSpriteObjects1.length = 0;
gdjs.WorldMapCode.GDNewSpriteObjects2.length = 0;
gdjs.WorldMapCode.GDLeafSpawnerObjects1.length = 0;
gdjs.WorldMapCode.GDLeafSpawnerObjects2.length = 0;
gdjs.WorldMapCode.GDLevelEditorObjects1.length = 0;
gdjs.WorldMapCode.GDLevelEditorObjects2.length = 0;

gdjs.WorldMapCode.eventsList0(runtimeScene);
gdjs.WorldMapCode.GDLevel2Objects1.length = 0;
gdjs.WorldMapCode.GDLevel2Objects2.length = 0;
gdjs.WorldMapCode.GDNewSprite2Objects1.length = 0;
gdjs.WorldMapCode.GDNewSprite2Objects2.length = 0;
gdjs.WorldMapCode.GDNewSprite3Objects1.length = 0;
gdjs.WorldMapCode.GDNewSprite3Objects2.length = 0;
gdjs.WorldMapCode.GDLevel1Objects1.length = 0;
gdjs.WorldMapCode.GDLevel1Objects2.length = 0;
gdjs.WorldMapCode.GDNewSpriteObjects1.length = 0;
gdjs.WorldMapCode.GDNewSpriteObjects2.length = 0;
gdjs.WorldMapCode.GDLeafSpawnerObjects1.length = 0;
gdjs.WorldMapCode.GDLeafSpawnerObjects2.length = 0;
gdjs.WorldMapCode.GDLevelEditorObjects1.length = 0;
gdjs.WorldMapCode.GDLevelEditorObjects2.length = 0;


return;

}

gdjs['WorldMapCode'] = gdjs.WorldMapCode;
