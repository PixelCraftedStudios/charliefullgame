gdjs.PLACETHEHOLDERCode = {};
gdjs.PLACETHEHOLDERCode.localVariables = [];
gdjs.PLACETHEHOLDERCode.GDPlayerObjects1= [];
gdjs.PLACETHEHOLDERCode.GDPlayerObjects2= [];
gdjs.PLACETHEHOLDERCode.GDPlayerObjects3= [];
gdjs.PLACETHEHOLDERCode.GDGrassObjects1= [];
gdjs.PLACETHEHOLDERCode.GDGrassObjects2= [];
gdjs.PLACETHEHOLDERCode.GDGrassObjects3= [];
gdjs.PLACETHEHOLDERCode.GDDirtObjects1= [];
gdjs.PLACETHEHOLDERCode.GDDirtObjects2= [];
gdjs.PLACETHEHOLDERCode.GDDirtObjects3= [];
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideLeftObjects1= [];
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideLeftObjects2= [];
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideLeftObjects3= [];
gdjs.PLACETHEHOLDERCode.GDDATEObjects1= [];
gdjs.PLACETHEHOLDERCode.GDDATEObjects2= [];
gdjs.PLACETHEHOLDERCode.GDDATEObjects3= [];
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideRightObjects1= [];
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideRightObjects2= [];
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideRightObjects3= [];
gdjs.PLACETHEHOLDERCode.GDDirt_9595Objects1= [];
gdjs.PLACETHEHOLDERCode.GDDirt_9595Objects2= [];
gdjs.PLACETHEHOLDERCode.GDDirt_9595Objects3= [];
gdjs.PLACETHEHOLDERCode.GDBlobObjects1= [];
gdjs.PLACETHEHOLDERCode.GDBlobObjects2= [];
gdjs.PLACETHEHOLDERCode.GDBlobObjects3= [];
gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects1= [];
gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects2= [];
gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects3= [];
gdjs.PLACETHEHOLDERCode.GDNewSpriteObjects1= [];
gdjs.PLACETHEHOLDERCode.GDNewSpriteObjects2= [];
gdjs.PLACETHEHOLDERCode.GDNewSpriteObjects3= [];
gdjs.PLACETHEHOLDERCode.GDNewSprite2Objects1= [];
gdjs.PLACETHEHOLDERCode.GDNewSprite2Objects2= [];
gdjs.PLACETHEHOLDERCode.GDNewSprite2Objects3= [];
gdjs.PLACETHEHOLDERCode.GDNewSprite3Objects1= [];
gdjs.PLACETHEHOLDERCode.GDNewSprite3Objects2= [];
gdjs.PLACETHEHOLDERCode.GDNewSprite3Objects3= [];
gdjs.PLACETHEHOLDERCode.GDNewTiledSprite2Objects1= [];
gdjs.PLACETHEHOLDERCode.GDNewTiledSprite2Objects2= [];
gdjs.PLACETHEHOLDERCode.GDNewTiledSprite2Objects3= [];
gdjs.PLACETHEHOLDERCode.GDLivesObjects1= [];
gdjs.PLACETHEHOLDERCode.GDLivesObjects2= [];
gdjs.PLACETHEHOLDERCode.GDLivesObjects3= [];
gdjs.PLACETHEHOLDERCode.GDNewSprite4Objects1= [];
gdjs.PLACETHEHOLDERCode.GDNewSprite4Objects2= [];
gdjs.PLACETHEHOLDERCode.GDNewSprite4Objects3= [];
gdjs.PLACETHEHOLDERCode.GDLeafSpawnerObjects1= [];
gdjs.PLACETHEHOLDERCode.GDLeafSpawnerObjects2= [];
gdjs.PLACETHEHOLDERCode.GDLeafSpawnerObjects3= [];
gdjs.PLACETHEHOLDERCode.GDLevelEditorObjects1= [];
gdjs.PLACETHEHOLDERCode.GDLevelEditorObjects2= [];
gdjs.PLACETHEHOLDERCode.GDLevelEditorObjects3= [];


gdjs.PLACETHEHOLDERCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mus_theme.mp3", true, 100, 1);
}}

}


};gdjs.PLACETHEHOLDERCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PLACETHEHOLDERCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.PLACETHEHOLDERCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PLACETHEHOLDERCode.GDPlayerObjects1[i].getBehavior("SmoothCamera").SetOffsetXOp(200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.PLACETHEHOLDERCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PLACETHEHOLDERCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PLACETHEHOLDERCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PLACETHEHOLDERCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.PLACETHEHOLDERCode.GDPlayerObjects2[k] = gdjs.PLACETHEHOLDERCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PLACETHEHOLDERCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PLACETHEHOLDERCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PLACETHEHOLDERCode.GDPlayerObjects2[i].getVariableNumber(gdjs.PLACETHEHOLDERCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.PLACETHEHOLDERCode.GDPlayerObjects2[k] = gdjs.PLACETHEHOLDERCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PLACETHEHOLDERCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PLACETHEHOLDERCode.GDPlayerObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 100, 1);
}{for(var i = 0, len = gdjs.PLACETHEHOLDERCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PLACETHEHOLDERCode.GDPlayerObjects2[i].returnVariable(gdjs.PLACETHEHOLDERCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PLACETHEHOLDERCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PLACETHEHOLDERCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.PLACETHEHOLDERCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.PLACETHEHOLDERCode.GDPlayerObjects1[k] = gdjs.PLACETHEHOLDERCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.PLACETHEHOLDERCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PLACETHEHOLDERCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.PLACETHEHOLDERCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PLACETHEHOLDERCode.GDPlayerObjects1[i].returnVariable(gdjs.PLACETHEHOLDERCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


};gdjs.PLACETHEHOLDERCode.asyncCallback22481092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PLACETHEHOLDERCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewTiledSprite"), gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects2);

{for(var i = 0, len = gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects2[i].setPosition(-(544),-(1472));
}
}gdjs.PLACETHEHOLDERCode.localVariables.length = 0;
}
gdjs.PLACETHEHOLDERCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.PLACETHEHOLDERCode.localVariables);
for (const obj of gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects1) asyncObjectsList.addObject("NewTiledSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.PLACETHEHOLDERCode.asyncCallback22481092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PLACETHEHOLDERCode.mapOfGDgdjs_9546PLACETHEHOLDERCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.PLACETHEHOLDERCode.GDPlayerObjects1});
gdjs.PLACETHEHOLDERCode.mapOfGDgdjs_9546PLACETHEHOLDERCode_9546GDBlobObjects1Objects = Hashtable.newFrom({"Blob": gdjs.PLACETHEHOLDERCode.GDBlobObjects1});
gdjs.PLACETHEHOLDERCode.asyncCallback22484004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PLACETHEHOLDERCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewTiledSprite"), gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects3);

{for(var i = 0, len = gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects3.length ;i < len;++i) {
    gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects3[i].clearForces();
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PLACETHEHOLDER", false);
}gdjs.PLACETHEHOLDERCode.localVariables.length = 0;
}
gdjs.PLACETHEHOLDERCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.PLACETHEHOLDERCode.localVariables);
for (const obj of gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects2) asyncObjectsList.addObject("NewTiledSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.PLACETHEHOLDERCode.asyncCallback22484004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PLACETHEHOLDERCode.asyncCallback22484292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PLACETHEHOLDERCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects2);
{for(var i = 0, len = gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects2[i].addForce(0, 100, 1);
}
}
{ //Subevents
gdjs.PLACETHEHOLDERCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.PLACETHEHOLDERCode.localVariables.length = 0;
}
gdjs.PLACETHEHOLDERCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.PLACETHEHOLDERCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PLACETHEHOLDERCode.asyncCallback22484292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PLACETHEHOLDERCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Blob"), gdjs.PLACETHEHOLDERCode.GDBlobObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PLACETHEHOLDERCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PLACETHEHOLDERCode.mapOfGDgdjs_9546PLACETHEHOLDERCode_9546GDPlayerObjects1Objects, gdjs.PLACETHEHOLDERCode.mapOfGDgdjs_9546PLACETHEHOLDERCode_9546GDBlobObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PLACETHEHOLDERCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.PLACETHEHOLDERCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PLACETHEHOLDERCode.GDPlayerObjects1[i].clearForces();
}
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 1, 0, 0.6);
}{for(var i = 0, len = gdjs.PLACETHEHOLDERCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PLACETHEHOLDERCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Die");
}
}{for(var i = 0, len = gdjs.PLACETHEHOLDERCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PLACETHEHOLDERCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{for(var i = 0, len = gdjs.PLACETHEHOLDERCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PLACETHEHOLDERCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(0);
}
}{for(var i = 0, len = gdjs.PLACETHEHOLDERCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PLACETHEHOLDERCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(0);
}
}{for(var i = 0, len = gdjs.PLACETHEHOLDERCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PLACETHEHOLDERCode.GDPlayerObjects1[i].getBehavior("PlatformerCharacterAnimator").EnableHorizontalFlipping(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.PLACETHEHOLDERCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.PLACETHEHOLDERCode.eventsList7 = function(runtimeScene) {

{


gdjs.PLACETHEHOLDERCode.eventsList0(runtimeScene);
}


{


gdjs.PLACETHEHOLDERCode.eventsList1(runtimeScene);
}


{


gdjs.PLACETHEHOLDERCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects1[i].setX(-(480));
}
}{for(var i = 0, len = gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects1[i].setY(-(240));
}
}{for(var i = 0, len = gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects1[i].addForce(0, 1000, 1);
}
}
{ //Subevents
gdjs.PLACETHEHOLDERCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.PLACETHEHOLDERCode.eventsList6(runtimeScene);
}


};

gdjs.PLACETHEHOLDERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PLACETHEHOLDERCode.GDPlayerObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDPlayerObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDPlayerObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrassObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrassObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrassObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDDirtObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDDirtObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDDirtObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideLeftObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideLeftObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideLeftObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDDATEObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDDATEObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDDATEObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideRightObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideRightObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideRightObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDDirt_9595Objects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDDirt_9595Objects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDDirt_9595Objects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDBlobObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDBlobObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDBlobObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSpriteObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSpriteObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSpriteObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite2Objects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite2Objects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite2Objects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite3Objects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite3Objects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite3Objects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDLivesObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDLivesObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDLivesObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite4Objects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite4Objects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite4Objects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDLeafSpawnerObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDLeafSpawnerObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDLeafSpawnerObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDLevelEditorObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDLevelEditorObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDLevelEditorObjects3.length = 0;

gdjs.PLACETHEHOLDERCode.eventsList7(runtimeScene);
gdjs.PLACETHEHOLDERCode.GDPlayerObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDPlayerObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDPlayerObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrassObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrassObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrassObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDDirtObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDDirtObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDDirtObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideLeftObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideLeftObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideLeftObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDDATEObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDDATEObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDDATEObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideRightObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideRightObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDGrass_9595SideRightObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDDirt_9595Objects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDDirt_9595Objects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDDirt_9595Objects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDBlobObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDBlobObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDBlobObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSpriteObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSpriteObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSpriteObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite2Objects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite2Objects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite2Objects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite3Objects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite3Objects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite3Objects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDLivesObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDLivesObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDLivesObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite4Objects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite4Objects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDNewSprite4Objects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDLeafSpawnerObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDLeafSpawnerObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDLeafSpawnerObjects3.length = 0;
gdjs.PLACETHEHOLDERCode.GDLevelEditorObjects1.length = 0;
gdjs.PLACETHEHOLDERCode.GDLevelEditorObjects2.length = 0;
gdjs.PLACETHEHOLDERCode.GDLevelEditorObjects3.length = 0;


return;

}

gdjs['PLACETHEHOLDERCode'] = gdjs.PLACETHEHOLDERCode;
