gdjs.INNCode = {};
gdjs.INNCode.localVariables = [];
gdjs.INNCode.GDPlayerObjects1= [];
gdjs.INNCode.GDPlayerObjects2= [];
gdjs.INNCode.GDPlayerObjects3= [];
gdjs.INNCode.GDGrassObjects1= [];
gdjs.INNCode.GDGrassObjects2= [];
gdjs.INNCode.GDGrassObjects3= [];
gdjs.INNCode.GDDirtObjects1= [];
gdjs.INNCode.GDDirtObjects2= [];
gdjs.INNCode.GDDirtObjects3= [];
gdjs.INNCode.GDGrass_9595SideLeftObjects1= [];
gdjs.INNCode.GDGrass_9595SideLeftObjects2= [];
gdjs.INNCode.GDGrass_9595SideLeftObjects3= [];
gdjs.INNCode.GDDATEObjects1= [];
gdjs.INNCode.GDDATEObjects2= [];
gdjs.INNCode.GDDATEObjects3= [];
gdjs.INNCode.GDGrass_9595SideRightObjects1= [];
gdjs.INNCode.GDGrass_9595SideRightObjects2= [];
gdjs.INNCode.GDGrass_9595SideRightObjects3= [];
gdjs.INNCode.GDDirt_9595Objects1= [];
gdjs.INNCode.GDDirt_9595Objects2= [];
gdjs.INNCode.GDDirt_9595Objects3= [];
gdjs.INNCode.GDBlobObjects1= [];
gdjs.INNCode.GDBlobObjects2= [];
gdjs.INNCode.GDBlobObjects3= [];
gdjs.INNCode.GDTransitionObjects1= [];
gdjs.INNCode.GDTransitionObjects2= [];
gdjs.INNCode.GDTransitionObjects3= [];
gdjs.INNCode.GDCloudsObjects1= [];
gdjs.INNCode.GDCloudsObjects2= [];
gdjs.INNCode.GDCloudsObjects3= [];
gdjs.INNCode.GDOrngGradObjects1= [];
gdjs.INNCode.GDOrngGradObjects2= [];
gdjs.INNCode.GDOrngGradObjects3= [];
gdjs.INNCode.GDForestDawnObjects1= [];
gdjs.INNCode.GDForestDawnObjects2= [];
gdjs.INNCode.GDForestDawnObjects3= [];
gdjs.INNCode.GDTreeBackrnObjects1= [];
gdjs.INNCode.GDTreeBackrnObjects2= [];
gdjs.INNCode.GDTreeBackrnObjects3= [];
gdjs.INNCode.GDLivesObjects1= [];
gdjs.INNCode.GDLivesObjects2= [];
gdjs.INNCode.GDLivesObjects3= [];
gdjs.INNCode.GDLivePlyerObjects1= [];
gdjs.INNCode.GDLivePlyerObjects2= [];
gdjs.INNCode.GDLivePlyerObjects3= [];
gdjs.INNCode.GDInnObjects1= [];
gdjs.INNCode.GDInnObjects2= [];
gdjs.INNCode.GDInnObjects3= [];
gdjs.INNCode.GDCoinObjects1= [];
gdjs.INNCode.GDCoinObjects2= [];
gdjs.INNCode.GDCoinObjects3= [];
gdjs.INNCode.GDCoinsObjects1= [];
gdjs.INNCode.GDCoinsObjects2= [];
gdjs.INNCode.GDCoinsObjects3= [];
gdjs.INNCode.GDCoinCtrObjects1= [];
gdjs.INNCode.GDCoinCtrObjects2= [];
gdjs.INNCode.GDCoinCtrObjects3= [];
gdjs.INNCode.GDMoveKeysObjects1= [];
gdjs.INNCode.GDMoveKeysObjects2= [];
gdjs.INNCode.GDMoveKeysObjects3= [];
gdjs.INNCode.GDSpceTextObjects1= [];
gdjs.INNCode.GDSpceTextObjects2= [];
gdjs.INNCode.GDSpceTextObjects3= [];
gdjs.INNCode.GDStoneObjects1= [];
gdjs.INNCode.GDStoneObjects2= [];
gdjs.INNCode.GDStoneObjects3= [];
gdjs.INNCode.GDWoodObjects1= [];
gdjs.INNCode.GDWoodObjects2= [];
gdjs.INNCode.GDWoodObjects3= [];
gdjs.INNCode.GDWelcomObjects1= [];
gdjs.INNCode.GDWelcomObjects2= [];
gdjs.INNCode.GDWelcomObjects3= [];
gdjs.INNCode.GDByeObjects1= [];
gdjs.INNCode.GDByeObjects2= [];
gdjs.INNCode.GDByeObjects3= [];
gdjs.INNCode.GDBackObjects1= [];
gdjs.INNCode.GDBackObjects2= [];
gdjs.INNCode.GDBackObjects3= [];
gdjs.INNCode.GDExitObjects1= [];
gdjs.INNCode.GDExitObjects2= [];
gdjs.INNCode.GDExitObjects3= [];
gdjs.INNCode.GDLeafSpawnerObjects1= [];
gdjs.INNCode.GDLeafSpawnerObjects2= [];
gdjs.INNCode.GDLeafSpawnerObjects3= [];
gdjs.INNCode.GDLevelEditorObjects1= [];
gdjs.INNCode.GDLevelEditorObjects2= [];
gdjs.INNCode.GDLevelEditorObjects3= [];


gdjs.INNCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mus_inn_fin.wav", true, 100, 1);
}}

}


};gdjs.INNCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.INNCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.INNCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.INNCode.GDPlayerObjects1[i].getBehavior("SmoothCamera").SetOffsetXOp(200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.INNCode.asyncCallback22305820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.INNCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Transition"), gdjs.INNCode.GDTransitionObjects2);

{for(var i = 0, len = gdjs.INNCode.GDTransitionObjects2.length ;i < len;++i) {
    gdjs.INNCode.GDTransitionObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.INNCode.GDTransitionObjects2.length ;i < len;++i) {
    gdjs.INNCode.GDTransitionObjects2[i].setPosition(-(544),-(1472));
}
}gdjs.INNCode.localVariables.length = 0;
}
gdjs.INNCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.INNCode.localVariables);
for (const obj of gdjs.INNCode.GDTransitionObjects1) asyncObjectsList.addObject("Transition", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.INNCode.asyncCallback22305820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.INNCode.mapOfGDgdjs_9546INNCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.INNCode.GDPlayerObjects1});
gdjs.INNCode.mapOfGDgdjs_9546INNCode_9546GDBlobObjects1Objects = Hashtable.newFrom({"Blob": gdjs.INNCode.GDBlobObjects1});
gdjs.INNCode.asyncCallback22308364 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.INNCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Transition"), gdjs.INNCode.GDTransitionObjects3);

{for(var i = 0, len = gdjs.INNCode.GDTransitionObjects3.length ;i < len;++i) {
    gdjs.INNCode.GDTransitionObjects3[i].clearForces();
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PLACETHEHOLDER", false);
}gdjs.INNCode.localVariables.length = 0;
}
gdjs.INNCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.INNCode.localVariables);
for (const obj of gdjs.INNCode.GDTransitionObjects2) asyncObjectsList.addObject("Transition", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.INNCode.asyncCallback22308364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.INNCode.asyncCallback22308844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.INNCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.INNCode.GDTransitionObjects2);
{for(var i = 0, len = gdjs.INNCode.GDTransitionObjects2.length ;i < len;++i) {
    gdjs.INNCode.GDTransitionObjects2[i].addForce(0, 100, 1);
}
}
{ //Subevents
gdjs.INNCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.INNCode.localVariables.length = 0;
}
gdjs.INNCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.INNCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.INNCode.asyncCallback22308844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.INNCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Blob"), gdjs.INNCode.GDBlobObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.INNCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.INNCode.mapOfGDgdjs_9546INNCode_9546GDPlayerObjects1Objects, gdjs.INNCode.mapOfGDgdjs_9546INNCode_9546GDBlobObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.INNCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.INNCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.INNCode.GDPlayerObjects1[i].clearForces();
}
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 1, 0, 0.6);
}{for(var i = 0, len = gdjs.INNCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.INNCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Die");
}
}{for(var i = 0, len = gdjs.INNCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.INNCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{for(var i = 0, len = gdjs.INNCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.INNCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(0);
}
}{for(var i = 0, len = gdjs.INNCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.INNCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(0);
}
}{for(var i = 0, len = gdjs.INNCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.INNCode.GDPlayerObjects1[i].getBehavior("PlatformerCharacterAnimator").EnableHorizontalFlipping(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.INNCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.INNCode.mapOfGDgdjs_9546INNCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.INNCode.GDPlayerObjects1});
gdjs.INNCode.mapOfGDgdjs_9546INNCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.INNCode.GDCoinObjects1});
gdjs.INNCode.asyncCallback22310020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.INNCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Coin"), gdjs.INNCode.GDCoinObjects2);

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.INNCode.GDCoinsObjects2);
{for(var i = 0, len = gdjs.INNCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.INNCode.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.INNCode.GDCoinsObjects2.length ;i < len;++i) {
    gdjs.INNCode.GDCoinsObjects2[i].getBehavior("Text").setText("X" + " " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}gdjs.INNCode.localVariables.length = 0;
}
gdjs.INNCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.INNCode.localVariables);
for (const obj of gdjs.INNCode.GDCoinObjects1) asyncObjectsList.addObject("Coin", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.INNCode.asyncCallback22310020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.INNCode.mapOfGDgdjs_9546INNCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.INNCode.GDPlayerObjects1});
gdjs.INNCode.mapOfGDgdjs_9546INNCode_9546GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.INNCode.GDExitObjects1});
gdjs.INNCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.INNCode.GDCoinsObjects1);
{for(var i = 0, len = gdjs.INNCode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.INNCode.GDCoinsObjects1[i].getBehavior("Text").setText("X" + " " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{


gdjs.INNCode.eventsList0(runtimeScene);
}


{


gdjs.INNCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.INNCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.INNCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.INNCode.GDTransitionObjects1[i].setX(-(480));
}
}{for(var i = 0, len = gdjs.INNCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.INNCode.GDTransitionObjects1[i].setY(-(240));
}
}{for(var i = 0, len = gdjs.INNCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.INNCode.GDTransitionObjects1[i].addForce(0, 1000, 1);
}
}
{ //Subevents
gdjs.INNCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.INNCode.eventsList5(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.INNCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.INNCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.INNCode.mapOfGDgdjs_9546INNCode_9546GDPlayerObjects1Objects, gdjs.INNCode.mapOfGDgdjs_9546INNCode_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22309948);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect2", false, 100, 1);
}
{ //Subevents
gdjs.INNCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.INNCode.GDExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.INNCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.INNCode.mapOfGDgdjs_9546INNCode_9546GDPlayerObjects1Objects, gdjs.INNCode.mapOfGDgdjs_9546INNCode_9546GDExitObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bye"), gdjs.INNCode.GDByeObjects1);
{for(var i = 0, len = gdjs.INNCode.GDByeObjects1.length ;i < len;++i) {
    gdjs.INNCode.GDByeObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


};

gdjs.INNCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.INNCode.GDPlayerObjects1.length = 0;
gdjs.INNCode.GDPlayerObjects2.length = 0;
gdjs.INNCode.GDPlayerObjects3.length = 0;
gdjs.INNCode.GDGrassObjects1.length = 0;
gdjs.INNCode.GDGrassObjects2.length = 0;
gdjs.INNCode.GDGrassObjects3.length = 0;
gdjs.INNCode.GDDirtObjects1.length = 0;
gdjs.INNCode.GDDirtObjects2.length = 0;
gdjs.INNCode.GDDirtObjects3.length = 0;
gdjs.INNCode.GDGrass_9595SideLeftObjects1.length = 0;
gdjs.INNCode.GDGrass_9595SideLeftObjects2.length = 0;
gdjs.INNCode.GDGrass_9595SideLeftObjects3.length = 0;
gdjs.INNCode.GDDATEObjects1.length = 0;
gdjs.INNCode.GDDATEObjects2.length = 0;
gdjs.INNCode.GDDATEObjects3.length = 0;
gdjs.INNCode.GDGrass_9595SideRightObjects1.length = 0;
gdjs.INNCode.GDGrass_9595SideRightObjects2.length = 0;
gdjs.INNCode.GDGrass_9595SideRightObjects3.length = 0;
gdjs.INNCode.GDDirt_9595Objects1.length = 0;
gdjs.INNCode.GDDirt_9595Objects2.length = 0;
gdjs.INNCode.GDDirt_9595Objects3.length = 0;
gdjs.INNCode.GDBlobObjects1.length = 0;
gdjs.INNCode.GDBlobObjects2.length = 0;
gdjs.INNCode.GDBlobObjects3.length = 0;
gdjs.INNCode.GDTransitionObjects1.length = 0;
gdjs.INNCode.GDTransitionObjects2.length = 0;
gdjs.INNCode.GDTransitionObjects3.length = 0;
gdjs.INNCode.GDCloudsObjects1.length = 0;
gdjs.INNCode.GDCloudsObjects2.length = 0;
gdjs.INNCode.GDCloudsObjects3.length = 0;
gdjs.INNCode.GDOrngGradObjects1.length = 0;
gdjs.INNCode.GDOrngGradObjects2.length = 0;
gdjs.INNCode.GDOrngGradObjects3.length = 0;
gdjs.INNCode.GDForestDawnObjects1.length = 0;
gdjs.INNCode.GDForestDawnObjects2.length = 0;
gdjs.INNCode.GDForestDawnObjects3.length = 0;
gdjs.INNCode.GDTreeBackrnObjects1.length = 0;
gdjs.INNCode.GDTreeBackrnObjects2.length = 0;
gdjs.INNCode.GDTreeBackrnObjects3.length = 0;
gdjs.INNCode.GDLivesObjects1.length = 0;
gdjs.INNCode.GDLivesObjects2.length = 0;
gdjs.INNCode.GDLivesObjects3.length = 0;
gdjs.INNCode.GDLivePlyerObjects1.length = 0;
gdjs.INNCode.GDLivePlyerObjects2.length = 0;
gdjs.INNCode.GDLivePlyerObjects3.length = 0;
gdjs.INNCode.GDInnObjects1.length = 0;
gdjs.INNCode.GDInnObjects2.length = 0;
gdjs.INNCode.GDInnObjects3.length = 0;
gdjs.INNCode.GDCoinObjects1.length = 0;
gdjs.INNCode.GDCoinObjects2.length = 0;
gdjs.INNCode.GDCoinObjects3.length = 0;
gdjs.INNCode.GDCoinsObjects1.length = 0;
gdjs.INNCode.GDCoinsObjects2.length = 0;
gdjs.INNCode.GDCoinsObjects3.length = 0;
gdjs.INNCode.GDCoinCtrObjects1.length = 0;
gdjs.INNCode.GDCoinCtrObjects2.length = 0;
gdjs.INNCode.GDCoinCtrObjects3.length = 0;
gdjs.INNCode.GDMoveKeysObjects1.length = 0;
gdjs.INNCode.GDMoveKeysObjects2.length = 0;
gdjs.INNCode.GDMoveKeysObjects3.length = 0;
gdjs.INNCode.GDSpceTextObjects1.length = 0;
gdjs.INNCode.GDSpceTextObjects2.length = 0;
gdjs.INNCode.GDSpceTextObjects3.length = 0;
gdjs.INNCode.GDStoneObjects1.length = 0;
gdjs.INNCode.GDStoneObjects2.length = 0;
gdjs.INNCode.GDStoneObjects3.length = 0;
gdjs.INNCode.GDWoodObjects1.length = 0;
gdjs.INNCode.GDWoodObjects2.length = 0;
gdjs.INNCode.GDWoodObjects3.length = 0;
gdjs.INNCode.GDWelcomObjects1.length = 0;
gdjs.INNCode.GDWelcomObjects2.length = 0;
gdjs.INNCode.GDWelcomObjects3.length = 0;
gdjs.INNCode.GDByeObjects1.length = 0;
gdjs.INNCode.GDByeObjects2.length = 0;
gdjs.INNCode.GDByeObjects3.length = 0;
gdjs.INNCode.GDBackObjects1.length = 0;
gdjs.INNCode.GDBackObjects2.length = 0;
gdjs.INNCode.GDBackObjects3.length = 0;
gdjs.INNCode.GDExitObjects1.length = 0;
gdjs.INNCode.GDExitObjects2.length = 0;
gdjs.INNCode.GDExitObjects3.length = 0;
gdjs.INNCode.GDLeafSpawnerObjects1.length = 0;
gdjs.INNCode.GDLeafSpawnerObjects2.length = 0;
gdjs.INNCode.GDLeafSpawnerObjects3.length = 0;
gdjs.INNCode.GDLevelEditorObjects1.length = 0;
gdjs.INNCode.GDLevelEditorObjects2.length = 0;
gdjs.INNCode.GDLevelEditorObjects3.length = 0;

gdjs.INNCode.eventsList7(runtimeScene);
gdjs.INNCode.GDPlayerObjects1.length = 0;
gdjs.INNCode.GDPlayerObjects2.length = 0;
gdjs.INNCode.GDPlayerObjects3.length = 0;
gdjs.INNCode.GDGrassObjects1.length = 0;
gdjs.INNCode.GDGrassObjects2.length = 0;
gdjs.INNCode.GDGrassObjects3.length = 0;
gdjs.INNCode.GDDirtObjects1.length = 0;
gdjs.INNCode.GDDirtObjects2.length = 0;
gdjs.INNCode.GDDirtObjects3.length = 0;
gdjs.INNCode.GDGrass_9595SideLeftObjects1.length = 0;
gdjs.INNCode.GDGrass_9595SideLeftObjects2.length = 0;
gdjs.INNCode.GDGrass_9595SideLeftObjects3.length = 0;
gdjs.INNCode.GDDATEObjects1.length = 0;
gdjs.INNCode.GDDATEObjects2.length = 0;
gdjs.INNCode.GDDATEObjects3.length = 0;
gdjs.INNCode.GDGrass_9595SideRightObjects1.length = 0;
gdjs.INNCode.GDGrass_9595SideRightObjects2.length = 0;
gdjs.INNCode.GDGrass_9595SideRightObjects3.length = 0;
gdjs.INNCode.GDDirt_9595Objects1.length = 0;
gdjs.INNCode.GDDirt_9595Objects2.length = 0;
gdjs.INNCode.GDDirt_9595Objects3.length = 0;
gdjs.INNCode.GDBlobObjects1.length = 0;
gdjs.INNCode.GDBlobObjects2.length = 0;
gdjs.INNCode.GDBlobObjects3.length = 0;
gdjs.INNCode.GDTransitionObjects1.length = 0;
gdjs.INNCode.GDTransitionObjects2.length = 0;
gdjs.INNCode.GDTransitionObjects3.length = 0;
gdjs.INNCode.GDCloudsObjects1.length = 0;
gdjs.INNCode.GDCloudsObjects2.length = 0;
gdjs.INNCode.GDCloudsObjects3.length = 0;
gdjs.INNCode.GDOrngGradObjects1.length = 0;
gdjs.INNCode.GDOrngGradObjects2.length = 0;
gdjs.INNCode.GDOrngGradObjects3.length = 0;
gdjs.INNCode.GDForestDawnObjects1.length = 0;
gdjs.INNCode.GDForestDawnObjects2.length = 0;
gdjs.INNCode.GDForestDawnObjects3.length = 0;
gdjs.INNCode.GDTreeBackrnObjects1.length = 0;
gdjs.INNCode.GDTreeBackrnObjects2.length = 0;
gdjs.INNCode.GDTreeBackrnObjects3.length = 0;
gdjs.INNCode.GDLivesObjects1.length = 0;
gdjs.INNCode.GDLivesObjects2.length = 0;
gdjs.INNCode.GDLivesObjects3.length = 0;
gdjs.INNCode.GDLivePlyerObjects1.length = 0;
gdjs.INNCode.GDLivePlyerObjects2.length = 0;
gdjs.INNCode.GDLivePlyerObjects3.length = 0;
gdjs.INNCode.GDInnObjects1.length = 0;
gdjs.INNCode.GDInnObjects2.length = 0;
gdjs.INNCode.GDInnObjects3.length = 0;
gdjs.INNCode.GDCoinObjects1.length = 0;
gdjs.INNCode.GDCoinObjects2.length = 0;
gdjs.INNCode.GDCoinObjects3.length = 0;
gdjs.INNCode.GDCoinsObjects1.length = 0;
gdjs.INNCode.GDCoinsObjects2.length = 0;
gdjs.INNCode.GDCoinsObjects3.length = 0;
gdjs.INNCode.GDCoinCtrObjects1.length = 0;
gdjs.INNCode.GDCoinCtrObjects2.length = 0;
gdjs.INNCode.GDCoinCtrObjects3.length = 0;
gdjs.INNCode.GDMoveKeysObjects1.length = 0;
gdjs.INNCode.GDMoveKeysObjects2.length = 0;
gdjs.INNCode.GDMoveKeysObjects3.length = 0;
gdjs.INNCode.GDSpceTextObjects1.length = 0;
gdjs.INNCode.GDSpceTextObjects2.length = 0;
gdjs.INNCode.GDSpceTextObjects3.length = 0;
gdjs.INNCode.GDStoneObjects1.length = 0;
gdjs.INNCode.GDStoneObjects2.length = 0;
gdjs.INNCode.GDStoneObjects3.length = 0;
gdjs.INNCode.GDWoodObjects1.length = 0;
gdjs.INNCode.GDWoodObjects2.length = 0;
gdjs.INNCode.GDWoodObjects3.length = 0;
gdjs.INNCode.GDWelcomObjects1.length = 0;
gdjs.INNCode.GDWelcomObjects2.length = 0;
gdjs.INNCode.GDWelcomObjects3.length = 0;
gdjs.INNCode.GDByeObjects1.length = 0;
gdjs.INNCode.GDByeObjects2.length = 0;
gdjs.INNCode.GDByeObjects3.length = 0;
gdjs.INNCode.GDBackObjects1.length = 0;
gdjs.INNCode.GDBackObjects2.length = 0;
gdjs.INNCode.GDBackObjects3.length = 0;
gdjs.INNCode.GDExitObjects1.length = 0;
gdjs.INNCode.GDExitObjects2.length = 0;
gdjs.INNCode.GDExitObjects3.length = 0;
gdjs.INNCode.GDLeafSpawnerObjects1.length = 0;
gdjs.INNCode.GDLeafSpawnerObjects2.length = 0;
gdjs.INNCode.GDLeafSpawnerObjects3.length = 0;
gdjs.INNCode.GDLevelEditorObjects1.length = 0;
gdjs.INNCode.GDLevelEditorObjects2.length = 0;
gdjs.INNCode.GDLevelEditorObjects3.length = 0;


return;

}

gdjs['INNCode'] = gdjs.INNCode;
