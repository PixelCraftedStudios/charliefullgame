gdjs.LevelDEMOCode = {};
gdjs.LevelDEMOCode.localVariables = [];
gdjs.LevelDEMOCode.GDPlayerObjects1= [];
gdjs.LevelDEMOCode.GDPlayerObjects2= [];
gdjs.LevelDEMOCode.GDPlayerObjects3= [];
gdjs.LevelDEMOCode.GDGrassObjects1= [];
gdjs.LevelDEMOCode.GDGrassObjects2= [];
gdjs.LevelDEMOCode.GDGrassObjects3= [];
gdjs.LevelDEMOCode.GDDirtObjects1= [];
gdjs.LevelDEMOCode.GDDirtObjects2= [];
gdjs.LevelDEMOCode.GDDirtObjects3= [];
gdjs.LevelDEMOCode.GDGrass_9595SideLeftObjects1= [];
gdjs.LevelDEMOCode.GDGrass_9595SideLeftObjects2= [];
gdjs.LevelDEMOCode.GDGrass_9595SideLeftObjects3= [];
gdjs.LevelDEMOCode.GDDATEObjects1= [];
gdjs.LevelDEMOCode.GDDATEObjects2= [];
gdjs.LevelDEMOCode.GDDATEObjects3= [];
gdjs.LevelDEMOCode.GDGrass_9595SideRightObjects1= [];
gdjs.LevelDEMOCode.GDGrass_9595SideRightObjects2= [];
gdjs.LevelDEMOCode.GDGrass_9595SideRightObjects3= [];
gdjs.LevelDEMOCode.GDDirt_9595Objects1= [];
gdjs.LevelDEMOCode.GDDirt_9595Objects2= [];
gdjs.LevelDEMOCode.GDDirt_9595Objects3= [];
gdjs.LevelDEMOCode.GDBlobObjects1= [];
gdjs.LevelDEMOCode.GDBlobObjects2= [];
gdjs.LevelDEMOCode.GDBlobObjects3= [];
gdjs.LevelDEMOCode.GDTransitionObjects1= [];
gdjs.LevelDEMOCode.GDTransitionObjects2= [];
gdjs.LevelDEMOCode.GDTransitionObjects3= [];
gdjs.LevelDEMOCode.GDCloudsObjects1= [];
gdjs.LevelDEMOCode.GDCloudsObjects2= [];
gdjs.LevelDEMOCode.GDCloudsObjects3= [];
gdjs.LevelDEMOCode.GDOrngGradObjects1= [];
gdjs.LevelDEMOCode.GDOrngGradObjects2= [];
gdjs.LevelDEMOCode.GDOrngGradObjects3= [];
gdjs.LevelDEMOCode.GDForestDawnObjects1= [];
gdjs.LevelDEMOCode.GDForestDawnObjects2= [];
gdjs.LevelDEMOCode.GDForestDawnObjects3= [];
gdjs.LevelDEMOCode.GDTreeBackrnObjects1= [];
gdjs.LevelDEMOCode.GDTreeBackrnObjects2= [];
gdjs.LevelDEMOCode.GDTreeBackrnObjects3= [];
gdjs.LevelDEMOCode.GDLivesObjects1= [];
gdjs.LevelDEMOCode.GDLivesObjects2= [];
gdjs.LevelDEMOCode.GDLivesObjects3= [];
gdjs.LevelDEMOCode.GDLivePlyerObjects1= [];
gdjs.LevelDEMOCode.GDLivePlyerObjects2= [];
gdjs.LevelDEMOCode.GDLivePlyerObjects3= [];
gdjs.LevelDEMOCode.GDInnObjects1= [];
gdjs.LevelDEMOCode.GDInnObjects2= [];
gdjs.LevelDEMOCode.GDInnObjects3= [];
gdjs.LevelDEMOCode.GDCoinObjects1= [];
gdjs.LevelDEMOCode.GDCoinObjects2= [];
gdjs.LevelDEMOCode.GDCoinObjects3= [];
gdjs.LevelDEMOCode.GDCoinsObjects1= [];
gdjs.LevelDEMOCode.GDCoinsObjects2= [];
gdjs.LevelDEMOCode.GDCoinsObjects3= [];
gdjs.LevelDEMOCode.GDCoinCtrObjects1= [];
gdjs.LevelDEMOCode.GDCoinCtrObjects2= [];
gdjs.LevelDEMOCode.GDCoinCtrObjects3= [];
gdjs.LevelDEMOCode.GDMoveKeysObjects1= [];
gdjs.LevelDEMOCode.GDMoveKeysObjects2= [];
gdjs.LevelDEMOCode.GDMoveKeysObjects3= [];
gdjs.LevelDEMOCode.GDSpceTextObjects1= [];
gdjs.LevelDEMOCode.GDSpceTextObjects2= [];
gdjs.LevelDEMOCode.GDSpceTextObjects3= [];
gdjs.LevelDEMOCode.GDNewTextObjects1= [];
gdjs.LevelDEMOCode.GDNewTextObjects2= [];
gdjs.LevelDEMOCode.GDNewTextObjects3= [];
gdjs.LevelDEMOCode.GDNewSpriteObjects1= [];
gdjs.LevelDEMOCode.GDNewSpriteObjects2= [];
gdjs.LevelDEMOCode.GDNewSpriteObjects3= [];
gdjs.LevelDEMOCode.GDLeafSpawnerObjects1= [];
gdjs.LevelDEMOCode.GDLeafSpawnerObjects2= [];
gdjs.LevelDEMOCode.GDLeafSpawnerObjects3= [];
gdjs.LevelDEMOCode.GDLevelEditorObjects1= [];
gdjs.LevelDEMOCode.GDLevelEditorObjects2= [];
gdjs.LevelDEMOCode.GDLevelEditorObjects3= [];


gdjs.LevelDEMOCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mus_theme.mp3", true, 100, 1);
}}

}


};gdjs.LevelDEMOCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelDEMOCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects1[i].getBehavior("SmoothCamera").SetOffsetXOp(200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.LevelDEMOCode.asyncCallback21273292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelDEMOCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Transition"), gdjs.LevelDEMOCode.GDTransitionObjects2);

{for(var i = 0, len = gdjs.LevelDEMOCode.GDTransitionObjects2.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDTransitionObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.LevelDEMOCode.GDTransitionObjects2.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDTransitionObjects2[i].setPosition(-(544),-(1472));
}
}gdjs.LevelDEMOCode.localVariables.length = 0;
}
gdjs.LevelDEMOCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelDEMOCode.localVariables);
for (const obj of gdjs.LevelDEMOCode.GDTransitionObjects1) asyncObjectsList.addObject("Transition", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.LevelDEMOCode.asyncCallback21273292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LevelDEMOCode.mapOfGDgdjs_9546LevelDEMOCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LevelDEMOCode.GDPlayerObjects1});
gdjs.LevelDEMOCode.mapOfGDgdjs_9546LevelDEMOCode_9546GDBlobObjects1Objects = Hashtable.newFrom({"Blob": gdjs.LevelDEMOCode.GDBlobObjects1});
gdjs.LevelDEMOCode.asyncCallback21276756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelDEMOCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Transition"), gdjs.LevelDEMOCode.GDTransitionObjects3);

{for(var i = 0, len = gdjs.LevelDEMOCode.GDTransitionObjects3.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDTransitionObjects3[i].clearForces();
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelDEMO", false);
}gdjs.LevelDEMOCode.localVariables.length = 0;
}
gdjs.LevelDEMOCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelDEMOCode.localVariables);
for (const obj of gdjs.LevelDEMOCode.GDTransitionObjects2) asyncObjectsList.addObject("Transition", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.LevelDEMOCode.asyncCallback21276756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LevelDEMOCode.asyncCallback21276548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelDEMOCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.LevelDEMOCode.GDTransitionObjects2);
{for(var i = 0, len = gdjs.LevelDEMOCode.GDTransitionObjects2.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDTransitionObjects2[i].addForce(0, 100, 1);
}
}
{ //Subevents
gdjs.LevelDEMOCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LevelDEMOCode.localVariables.length = 0;
}
gdjs.LevelDEMOCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelDEMOCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LevelDEMOCode.asyncCallback21276548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LevelDEMOCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Blob"), gdjs.LevelDEMOCode.GDBlobObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelDEMOCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelDEMOCode.mapOfGDgdjs_9546LevelDEMOCode_9546GDPlayerObjects1Objects, gdjs.LevelDEMOCode.mapOfGDgdjs_9546LevelDEMOCode_9546GDBlobObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LevelDEMOCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects1[i].clearForces();
}
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 1, 0, 0.6);
}{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Die");
}
}{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(0);
}
}{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(0);
}
}{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects1[i].getBehavior("PlatformerCharacterAnimator").EnableHorizontalFlipping(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.LevelDEMOCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.LevelDEMOCode.mapOfGDgdjs_9546LevelDEMOCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LevelDEMOCode.GDPlayerObjects1});
gdjs.LevelDEMOCode.mapOfGDgdjs_9546LevelDEMOCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.LevelDEMOCode.GDCoinObjects1});
gdjs.LevelDEMOCode.asyncCallback21277948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelDEMOCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Coin"), gdjs.LevelDEMOCode.GDCoinObjects2);

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.LevelDEMOCode.GDCoinsObjects2);
{for(var i = 0, len = gdjs.LevelDEMOCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.LevelDEMOCode.GDCoinsObjects2.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDCoinsObjects2[i].getBehavior("Text").setText("X" + " " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}gdjs.LevelDEMOCode.localVariables.length = 0;
}
gdjs.LevelDEMOCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelDEMOCode.localVariables);
for (const obj of gdjs.LevelDEMOCode.GDCoinObjects1) asyncObjectsList.addObject("Coin", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.LevelDEMOCode.asyncCallback21277948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LevelDEMOCode.mapOfGDgdjs_9546LevelDEMOCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LevelDEMOCode.GDPlayerObjects1});
gdjs.LevelDEMOCode.mapOfGDgdjs_9546LevelDEMOCode_9546GDInnObjects1Objects = Hashtable.newFrom({"Inn": gdjs.LevelDEMOCode.GDInnObjects1});
gdjs.LevelDEMOCode.mapOfGDgdjs_9546LevelDEMOCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.LevelDEMOCode.GDNewSpriteObjects1});
gdjs.LevelDEMOCode.mapOfGDgdjs_9546LevelDEMOCode_9546GDBlobObjects1Objects = Hashtable.newFrom({"Blob": gdjs.LevelDEMOCode.GDBlobObjects1});
gdjs.LevelDEMOCode.asyncCallback21281628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelDEMOCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.LevelDEMOCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("idle");
}
}gdjs.LevelDEMOCode.localVariables.length = 0;
}
gdjs.LevelDEMOCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelDEMOCode.localVariables);
for (const obj of gdjs.LevelDEMOCode.GDPlayerObjects2) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.LevelDEMOCode.asyncCallback21281628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LevelDEMOCode.asyncCallback21280452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelDEMOCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Blob"), gdjs.LevelDEMOCode.GDBlobObjects2);

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelDEMOCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.LevelDEMOCode.GDBlobObjects2.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDBlobObjects2[i].getBehavior("Animation").setAnimationName("Die");
}
}{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Punch");
}
}{for(var i = 0, len = gdjs.LevelDEMOCode.GDBlobObjects2.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDBlobObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.LevelDEMOCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LevelDEMOCode.localVariables.length = 0;
}
gdjs.LevelDEMOCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelDEMOCode.localVariables);
for (const obj of gdjs.LevelDEMOCode.GDBlobObjects1) asyncObjectsList.addObject("Blob", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.LevelDEMOCode.asyncCallback21280452(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LevelDEMOCode.asyncCallback21282268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelDEMOCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.LevelDEMOCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("idle");
}
}gdjs.LevelDEMOCode.localVariables.length = 0;
}
gdjs.LevelDEMOCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelDEMOCode.localVariables);
for (const obj of gdjs.LevelDEMOCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.LevelDEMOCode.asyncCallback21282268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LevelDEMOCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelDEMOCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelDEMOCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelDEMOCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelDEMOCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


};gdjs.LevelDEMOCode.eventsList11 = function(runtimeScene) {

{


gdjs.LevelDEMOCode.eventsList0(runtimeScene);
}


{


gdjs.LevelDEMOCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.LevelDEMOCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.LevelDEMOCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDTransitionObjects1[i].setX(-(480));
}
}{for(var i = 0, len = gdjs.LevelDEMOCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDTransitionObjects1[i].setY(-(240));
}
}{for(var i = 0, len = gdjs.LevelDEMOCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDTransitionObjects1[i].addForce(0, 1000, 1);
}
}
{ //Subevents
gdjs.LevelDEMOCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.LevelDEMOCode.eventsList5(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.LevelDEMOCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelDEMOCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelDEMOCode.mapOfGDgdjs_9546LevelDEMOCode_9546GDPlayerObjects1Objects, gdjs.LevelDEMOCode.mapOfGDgdjs_9546LevelDEMOCode_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21277524);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect2", false, 100, 1);
}
{ //Subevents
gdjs.LevelDEMOCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Inn"), gdjs.LevelDEMOCode.GDInnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelDEMOCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelDEMOCode.mapOfGDgdjs_9546LevelDEMOCode_9546GDPlayerObjects1Objects, gdjs.LevelDEMOCode.mapOfGDgdjs_9546LevelDEMOCode_9546GDInnObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("INN");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Load", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blob"), gdjs.LevelDEMOCode.GDBlobObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LevelDEMOCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelDEMOCode.mapOfGDgdjs_9546LevelDEMOCode_9546GDNewSpriteObjects1Objects, gdjs.LevelDEMOCode.mapOfGDgdjs_9546LevelDEMOCode_9546GDBlobObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl");
}
if (isConditionTrue_0) {
/* Reuse gdjs.LevelDEMOCode.GDBlobObjects1 */
{for(var i = 0, len = gdjs.LevelDEMOCode.GDBlobObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDBlobObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 3, 3, 3, 0.8, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.LevelDEMOCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelDEMOCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Punch");
}
}
{ //Subevents
gdjs.LevelDEMOCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelDEMOCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelDEMOCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.LevelDEMOCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.LevelDEMOCode.GDPlayerObjects1[k] = gdjs.LevelDEMOCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LevelDEMOCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelDEMOCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.LevelDEMOCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnLadder()) ) {
        isConditionTrue_0 = true;
        gdjs.LevelDEMOCode.GDPlayerObjects1[k] = gdjs.LevelDEMOCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LevelDEMOCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelDEMOCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.LevelDEMOCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.LevelDEMOCode.GDPlayerObjects1[k] = gdjs.LevelDEMOCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LevelDEMOCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.LevelDEMOCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LevelDEMOCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LevelDEMOCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelDEMOCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LevelDEMOCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDNewSpriteObjects1[i].setX((( gdjs.LevelDEMOCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.LevelDEMOCode.GDPlayerObjects1[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.LevelDEMOCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LevelDEMOCode.GDNewSpriteObjects1[i].setY((( gdjs.LevelDEMOCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.LevelDEMOCode.GDPlayerObjects1[0].getPointY("")));
}
}}

}


{



}


{


gdjs.LevelDEMOCode.eventsList10(runtimeScene);
}


};

gdjs.LevelDEMOCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelDEMOCode.GDPlayerObjects1.length = 0;
gdjs.LevelDEMOCode.GDPlayerObjects2.length = 0;
gdjs.LevelDEMOCode.GDPlayerObjects3.length = 0;
gdjs.LevelDEMOCode.GDGrassObjects1.length = 0;
gdjs.LevelDEMOCode.GDGrassObjects2.length = 0;
gdjs.LevelDEMOCode.GDGrassObjects3.length = 0;
gdjs.LevelDEMOCode.GDDirtObjects1.length = 0;
gdjs.LevelDEMOCode.GDDirtObjects2.length = 0;
gdjs.LevelDEMOCode.GDDirtObjects3.length = 0;
gdjs.LevelDEMOCode.GDGrass_9595SideLeftObjects1.length = 0;
gdjs.LevelDEMOCode.GDGrass_9595SideLeftObjects2.length = 0;
gdjs.LevelDEMOCode.GDGrass_9595SideLeftObjects3.length = 0;
gdjs.LevelDEMOCode.GDDATEObjects1.length = 0;
gdjs.LevelDEMOCode.GDDATEObjects2.length = 0;
gdjs.LevelDEMOCode.GDDATEObjects3.length = 0;
gdjs.LevelDEMOCode.GDGrass_9595SideRightObjects1.length = 0;
gdjs.LevelDEMOCode.GDGrass_9595SideRightObjects2.length = 0;
gdjs.LevelDEMOCode.GDGrass_9595SideRightObjects3.length = 0;
gdjs.LevelDEMOCode.GDDirt_9595Objects1.length = 0;
gdjs.LevelDEMOCode.GDDirt_9595Objects2.length = 0;
gdjs.LevelDEMOCode.GDDirt_9595Objects3.length = 0;
gdjs.LevelDEMOCode.GDBlobObjects1.length = 0;
gdjs.LevelDEMOCode.GDBlobObjects2.length = 0;
gdjs.LevelDEMOCode.GDBlobObjects3.length = 0;
gdjs.LevelDEMOCode.GDTransitionObjects1.length = 0;
gdjs.LevelDEMOCode.GDTransitionObjects2.length = 0;
gdjs.LevelDEMOCode.GDTransitionObjects3.length = 0;
gdjs.LevelDEMOCode.GDCloudsObjects1.length = 0;
gdjs.LevelDEMOCode.GDCloudsObjects2.length = 0;
gdjs.LevelDEMOCode.GDCloudsObjects3.length = 0;
gdjs.LevelDEMOCode.GDOrngGradObjects1.length = 0;
gdjs.LevelDEMOCode.GDOrngGradObjects2.length = 0;
gdjs.LevelDEMOCode.GDOrngGradObjects3.length = 0;
gdjs.LevelDEMOCode.GDForestDawnObjects1.length = 0;
gdjs.LevelDEMOCode.GDForestDawnObjects2.length = 0;
gdjs.LevelDEMOCode.GDForestDawnObjects3.length = 0;
gdjs.LevelDEMOCode.GDTreeBackrnObjects1.length = 0;
gdjs.LevelDEMOCode.GDTreeBackrnObjects2.length = 0;
gdjs.LevelDEMOCode.GDTreeBackrnObjects3.length = 0;
gdjs.LevelDEMOCode.GDLivesObjects1.length = 0;
gdjs.LevelDEMOCode.GDLivesObjects2.length = 0;
gdjs.LevelDEMOCode.GDLivesObjects3.length = 0;
gdjs.LevelDEMOCode.GDLivePlyerObjects1.length = 0;
gdjs.LevelDEMOCode.GDLivePlyerObjects2.length = 0;
gdjs.LevelDEMOCode.GDLivePlyerObjects3.length = 0;
gdjs.LevelDEMOCode.GDInnObjects1.length = 0;
gdjs.LevelDEMOCode.GDInnObjects2.length = 0;
gdjs.LevelDEMOCode.GDInnObjects3.length = 0;
gdjs.LevelDEMOCode.GDCoinObjects1.length = 0;
gdjs.LevelDEMOCode.GDCoinObjects2.length = 0;
gdjs.LevelDEMOCode.GDCoinObjects3.length = 0;
gdjs.LevelDEMOCode.GDCoinsObjects1.length = 0;
gdjs.LevelDEMOCode.GDCoinsObjects2.length = 0;
gdjs.LevelDEMOCode.GDCoinsObjects3.length = 0;
gdjs.LevelDEMOCode.GDCoinCtrObjects1.length = 0;
gdjs.LevelDEMOCode.GDCoinCtrObjects2.length = 0;
gdjs.LevelDEMOCode.GDCoinCtrObjects3.length = 0;
gdjs.LevelDEMOCode.GDMoveKeysObjects1.length = 0;
gdjs.LevelDEMOCode.GDMoveKeysObjects2.length = 0;
gdjs.LevelDEMOCode.GDMoveKeysObjects3.length = 0;
gdjs.LevelDEMOCode.GDSpceTextObjects1.length = 0;
gdjs.LevelDEMOCode.GDSpceTextObjects2.length = 0;
gdjs.LevelDEMOCode.GDSpceTextObjects3.length = 0;
gdjs.LevelDEMOCode.GDNewTextObjects1.length = 0;
gdjs.LevelDEMOCode.GDNewTextObjects2.length = 0;
gdjs.LevelDEMOCode.GDNewTextObjects3.length = 0;
gdjs.LevelDEMOCode.GDNewSpriteObjects1.length = 0;
gdjs.LevelDEMOCode.GDNewSpriteObjects2.length = 0;
gdjs.LevelDEMOCode.GDNewSpriteObjects3.length = 0;
gdjs.LevelDEMOCode.GDLeafSpawnerObjects1.length = 0;
gdjs.LevelDEMOCode.GDLeafSpawnerObjects2.length = 0;
gdjs.LevelDEMOCode.GDLeafSpawnerObjects3.length = 0;
gdjs.LevelDEMOCode.GDLevelEditorObjects1.length = 0;
gdjs.LevelDEMOCode.GDLevelEditorObjects2.length = 0;
gdjs.LevelDEMOCode.GDLevelEditorObjects3.length = 0;

gdjs.LevelDEMOCode.eventsList11(runtimeScene);
gdjs.LevelDEMOCode.GDPlayerObjects1.length = 0;
gdjs.LevelDEMOCode.GDPlayerObjects2.length = 0;
gdjs.LevelDEMOCode.GDPlayerObjects3.length = 0;
gdjs.LevelDEMOCode.GDGrassObjects1.length = 0;
gdjs.LevelDEMOCode.GDGrassObjects2.length = 0;
gdjs.LevelDEMOCode.GDGrassObjects3.length = 0;
gdjs.LevelDEMOCode.GDDirtObjects1.length = 0;
gdjs.LevelDEMOCode.GDDirtObjects2.length = 0;
gdjs.LevelDEMOCode.GDDirtObjects3.length = 0;
gdjs.LevelDEMOCode.GDGrass_9595SideLeftObjects1.length = 0;
gdjs.LevelDEMOCode.GDGrass_9595SideLeftObjects2.length = 0;
gdjs.LevelDEMOCode.GDGrass_9595SideLeftObjects3.length = 0;
gdjs.LevelDEMOCode.GDDATEObjects1.length = 0;
gdjs.LevelDEMOCode.GDDATEObjects2.length = 0;
gdjs.LevelDEMOCode.GDDATEObjects3.length = 0;
gdjs.LevelDEMOCode.GDGrass_9595SideRightObjects1.length = 0;
gdjs.LevelDEMOCode.GDGrass_9595SideRightObjects2.length = 0;
gdjs.LevelDEMOCode.GDGrass_9595SideRightObjects3.length = 0;
gdjs.LevelDEMOCode.GDDirt_9595Objects1.length = 0;
gdjs.LevelDEMOCode.GDDirt_9595Objects2.length = 0;
gdjs.LevelDEMOCode.GDDirt_9595Objects3.length = 0;
gdjs.LevelDEMOCode.GDBlobObjects1.length = 0;
gdjs.LevelDEMOCode.GDBlobObjects2.length = 0;
gdjs.LevelDEMOCode.GDBlobObjects3.length = 0;
gdjs.LevelDEMOCode.GDTransitionObjects1.length = 0;
gdjs.LevelDEMOCode.GDTransitionObjects2.length = 0;
gdjs.LevelDEMOCode.GDTransitionObjects3.length = 0;
gdjs.LevelDEMOCode.GDCloudsObjects1.length = 0;
gdjs.LevelDEMOCode.GDCloudsObjects2.length = 0;
gdjs.LevelDEMOCode.GDCloudsObjects3.length = 0;
gdjs.LevelDEMOCode.GDOrngGradObjects1.length = 0;
gdjs.LevelDEMOCode.GDOrngGradObjects2.length = 0;
gdjs.LevelDEMOCode.GDOrngGradObjects3.length = 0;
gdjs.LevelDEMOCode.GDForestDawnObjects1.length = 0;
gdjs.LevelDEMOCode.GDForestDawnObjects2.length = 0;
gdjs.LevelDEMOCode.GDForestDawnObjects3.length = 0;
gdjs.LevelDEMOCode.GDTreeBackrnObjects1.length = 0;
gdjs.LevelDEMOCode.GDTreeBackrnObjects2.length = 0;
gdjs.LevelDEMOCode.GDTreeBackrnObjects3.length = 0;
gdjs.LevelDEMOCode.GDLivesObjects1.length = 0;
gdjs.LevelDEMOCode.GDLivesObjects2.length = 0;
gdjs.LevelDEMOCode.GDLivesObjects3.length = 0;
gdjs.LevelDEMOCode.GDLivePlyerObjects1.length = 0;
gdjs.LevelDEMOCode.GDLivePlyerObjects2.length = 0;
gdjs.LevelDEMOCode.GDLivePlyerObjects3.length = 0;
gdjs.LevelDEMOCode.GDInnObjects1.length = 0;
gdjs.LevelDEMOCode.GDInnObjects2.length = 0;
gdjs.LevelDEMOCode.GDInnObjects3.length = 0;
gdjs.LevelDEMOCode.GDCoinObjects1.length = 0;
gdjs.LevelDEMOCode.GDCoinObjects2.length = 0;
gdjs.LevelDEMOCode.GDCoinObjects3.length = 0;
gdjs.LevelDEMOCode.GDCoinsObjects1.length = 0;
gdjs.LevelDEMOCode.GDCoinsObjects2.length = 0;
gdjs.LevelDEMOCode.GDCoinsObjects3.length = 0;
gdjs.LevelDEMOCode.GDCoinCtrObjects1.length = 0;
gdjs.LevelDEMOCode.GDCoinCtrObjects2.length = 0;
gdjs.LevelDEMOCode.GDCoinCtrObjects3.length = 0;
gdjs.LevelDEMOCode.GDMoveKeysObjects1.length = 0;
gdjs.LevelDEMOCode.GDMoveKeysObjects2.length = 0;
gdjs.LevelDEMOCode.GDMoveKeysObjects3.length = 0;
gdjs.LevelDEMOCode.GDSpceTextObjects1.length = 0;
gdjs.LevelDEMOCode.GDSpceTextObjects2.length = 0;
gdjs.LevelDEMOCode.GDSpceTextObjects3.length = 0;
gdjs.LevelDEMOCode.GDNewTextObjects1.length = 0;
gdjs.LevelDEMOCode.GDNewTextObjects2.length = 0;
gdjs.LevelDEMOCode.GDNewTextObjects3.length = 0;
gdjs.LevelDEMOCode.GDNewSpriteObjects1.length = 0;
gdjs.LevelDEMOCode.GDNewSpriteObjects2.length = 0;
gdjs.LevelDEMOCode.GDNewSpriteObjects3.length = 0;
gdjs.LevelDEMOCode.GDLeafSpawnerObjects1.length = 0;
gdjs.LevelDEMOCode.GDLeafSpawnerObjects2.length = 0;
gdjs.LevelDEMOCode.GDLeafSpawnerObjects3.length = 0;
gdjs.LevelDEMOCode.GDLevelEditorObjects1.length = 0;
gdjs.LevelDEMOCode.GDLevelEditorObjects2.length = 0;
gdjs.LevelDEMOCode.GDLevelEditorObjects3.length = 0;


return;

}

gdjs['LevelDEMOCode'] = gdjs.LevelDEMOCode;
