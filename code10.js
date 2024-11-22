gdjs.WorldMapCode = {};
gdjs.WorldMapCode.localVariables = [];
gdjs.WorldMapCode.GDLevel2Objects1= [];
gdjs.WorldMapCode.GDLevel2Objects2= [];
gdjs.WorldMapCode.GDLevel2Objects3= [];
gdjs.WorldMapCode.GDNewSprite2Objects1= [];
gdjs.WorldMapCode.GDNewSprite2Objects2= [];
gdjs.WorldMapCode.GDNewSprite2Objects3= [];
gdjs.WorldMapCode.GDNewSprite3Objects1= [];
gdjs.WorldMapCode.GDNewSprite3Objects2= [];
gdjs.WorldMapCode.GDNewSprite3Objects3= [];
gdjs.WorldMapCode.GDLevel1Objects1= [];
gdjs.WorldMapCode.GDLevel1Objects2= [];
gdjs.WorldMapCode.GDLevel1Objects3= [];
gdjs.WorldMapCode.GDNewSpriteObjects1= [];
gdjs.WorldMapCode.GDNewSpriteObjects2= [];
gdjs.WorldMapCode.GDNewSpriteObjects3= [];
gdjs.WorldMapCode.GDMOUSEObjects1= [];
gdjs.WorldMapCode.GDMOUSEObjects2= [];
gdjs.WorldMapCode.GDMOUSEObjects3= [];
gdjs.WorldMapCode.GDLeafSpawnerObjects1= [];
gdjs.WorldMapCode.GDLeafSpawnerObjects2= [];
gdjs.WorldMapCode.GDLeafSpawnerObjects3= [];
gdjs.WorldMapCode.GDLevelEditorObjects1= [];
gdjs.WorldMapCode.GDLevelEditorObjects2= [];
gdjs.WorldMapCode.GDLevelEditorObjects3= [];


gdjs.WorldMapCode.mapOfGDgdjs_9546WorldMapCode_9546GDMOUSEObjects1Objects = Hashtable.newFrom({"MOUSE": gdjs.WorldMapCode.GDMOUSEObjects1});
gdjs.WorldMapCode.mapOfGDgdjs_9546WorldMapCode_9546GDLevel1Objects1Objects = Hashtable.newFrom({"Level1": gdjs.WorldMapCode.GDLevel1Objects1});
gdjs.WorldMapCode.mapOfGDgdjs_9546WorldMapCode_9546GDMOUSEObjects1Objects = Hashtable.newFrom({"MOUSE": gdjs.WorldMapCode.GDMOUSEObjects1});
gdjs.WorldMapCode.mapOfGDgdjs_9546WorldMapCode_9546GDLevel2Objects1Objects = Hashtable.newFrom({"Level2": gdjs.WorldMapCode.GDLevel2Objects1});
gdjs.WorldMapCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MOUSE"), gdjs.WorldMapCode.GDMOUSEObjects2);
{for(var i = 0, len = gdjs.WorldMapCode.GDMOUSEObjects2.length ;i < len;++i) {
    gdjs.WorldMapCode.GDMOUSEObjects2[i].addForce(0, -(500), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MOUSE"), gdjs.WorldMapCode.GDMOUSEObjects2);
{for(var i = 0, len = gdjs.WorldMapCode.GDMOUSEObjects2.length ;i < len;++i) {
    gdjs.WorldMapCode.GDMOUSEObjects2[i].addForce(-(500), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MOUSE"), gdjs.WorldMapCode.GDMOUSEObjects2);
{for(var i = 0, len = gdjs.WorldMapCode.GDMOUSEObjects2.length ;i < len;++i) {
    gdjs.WorldMapCode.GDMOUSEObjects2[i].addForce(0, 500, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MOUSE"), gdjs.WorldMapCode.GDMOUSEObjects1);
{for(var i = 0, len = gdjs.WorldMapCode.GDMOUSEObjects1.length ;i < len;++i) {
    gdjs.WorldMapCode.GDMOUSEObjects1[i].addForce(500, 0, 0);
}
}}

}


};gdjs.WorldMapCode.eventsList1 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.WorldMapCode.GDLevel1Objects1);
gdjs.copyArray(runtimeScene.getObjects("MOUSE"), gdjs.WorldMapCode.GDMOUSEObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WorldMapCode.mapOfGDgdjs_9546WorldMapCode_9546GDMOUSEObjects1Objects, gdjs.WorldMapCode.mapOfGDgdjs_9546WorldMapCode_9546GDLevel1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("LevelDEMO2");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Load", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.WorldMapCode.GDLevel2Objects1);
gdjs.copyArray(runtimeScene.getObjects("MOUSE"), gdjs.WorldMapCode.GDMOUSEObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WorldMapCode.mapOfGDgdjs_9546WorldMapCode_9546GDMOUSEObjects1Objects, gdjs.WorldMapCode.mapOfGDgdjs_9546WorldMapCode_9546GDLevel2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
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


gdjs.WorldMapCode.eventsList0(runtimeScene);
}


};

gdjs.WorldMapCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WorldMapCode.GDLevel2Objects1.length = 0;
gdjs.WorldMapCode.GDLevel2Objects2.length = 0;
gdjs.WorldMapCode.GDLevel2Objects3.length = 0;
gdjs.WorldMapCode.GDNewSprite2Objects1.length = 0;
gdjs.WorldMapCode.GDNewSprite2Objects2.length = 0;
gdjs.WorldMapCode.GDNewSprite2Objects3.length = 0;
gdjs.WorldMapCode.GDNewSprite3Objects1.length = 0;
gdjs.WorldMapCode.GDNewSprite3Objects2.length = 0;
gdjs.WorldMapCode.GDNewSprite3Objects3.length = 0;
gdjs.WorldMapCode.GDLevel1Objects1.length = 0;
gdjs.WorldMapCode.GDLevel1Objects2.length = 0;
gdjs.WorldMapCode.GDLevel1Objects3.length = 0;
gdjs.WorldMapCode.GDNewSpriteObjects1.length = 0;
gdjs.WorldMapCode.GDNewSpriteObjects2.length = 0;
gdjs.WorldMapCode.GDNewSpriteObjects3.length = 0;
gdjs.WorldMapCode.GDMOUSEObjects1.length = 0;
gdjs.WorldMapCode.GDMOUSEObjects2.length = 0;
gdjs.WorldMapCode.GDMOUSEObjects3.length = 0;
gdjs.WorldMapCode.GDLeafSpawnerObjects1.length = 0;
gdjs.WorldMapCode.GDLeafSpawnerObjects2.length = 0;
gdjs.WorldMapCode.GDLeafSpawnerObjects3.length = 0;
gdjs.WorldMapCode.GDLevelEditorObjects1.length = 0;
gdjs.WorldMapCode.GDLevelEditorObjects2.length = 0;
gdjs.WorldMapCode.GDLevelEditorObjects3.length = 0;

gdjs.WorldMapCode.eventsList1(runtimeScene);
gdjs.WorldMapCode.GDLevel2Objects1.length = 0;
gdjs.WorldMapCode.GDLevel2Objects2.length = 0;
gdjs.WorldMapCode.GDLevel2Objects3.length = 0;
gdjs.WorldMapCode.GDNewSprite2Objects1.length = 0;
gdjs.WorldMapCode.GDNewSprite2Objects2.length = 0;
gdjs.WorldMapCode.GDNewSprite2Objects3.length = 0;
gdjs.WorldMapCode.GDNewSprite3Objects1.length = 0;
gdjs.WorldMapCode.GDNewSprite3Objects2.length = 0;
gdjs.WorldMapCode.GDNewSprite3Objects3.length = 0;
gdjs.WorldMapCode.GDLevel1Objects1.length = 0;
gdjs.WorldMapCode.GDLevel1Objects2.length = 0;
gdjs.WorldMapCode.GDLevel1Objects3.length = 0;
gdjs.WorldMapCode.GDNewSpriteObjects1.length = 0;
gdjs.WorldMapCode.GDNewSpriteObjects2.length = 0;
gdjs.WorldMapCode.GDNewSpriteObjects3.length = 0;
gdjs.WorldMapCode.GDMOUSEObjects1.length = 0;
gdjs.WorldMapCode.GDMOUSEObjects2.length = 0;
gdjs.WorldMapCode.GDMOUSEObjects3.length = 0;
gdjs.WorldMapCode.GDLeafSpawnerObjects1.length = 0;
gdjs.WorldMapCode.GDLeafSpawnerObjects2.length = 0;
gdjs.WorldMapCode.GDLeafSpawnerObjects3.length = 0;
gdjs.WorldMapCode.GDLevelEditorObjects1.length = 0;
gdjs.WorldMapCode.GDLevelEditorObjects2.length = 0;
gdjs.WorldMapCode.GDLevelEditorObjects3.length = 0;


return;

}

gdjs['WorldMapCode'] = gdjs.WorldMapCode;
