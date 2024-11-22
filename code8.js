gdjs.Level4BOSSDIOCode = {};
gdjs.Level4BOSSDIOCode.localVariables = [];
gdjs.Level4BOSSDIOCode.GDNewSpriteObjects1= [];
gdjs.Level4BOSSDIOCode.GDNewSpriteObjects2= [];
gdjs.Level4BOSSDIOCode.GDNewSpriteObjects3= [];
gdjs.Level4BOSSDIOCode.GDDioBoxObjects1= [];
gdjs.Level4BOSSDIOCode.GDDioBoxObjects2= [];
gdjs.Level4BOSSDIOCode.GDDioBoxObjects3= [];
gdjs.Level4BOSSDIOCode.GDNewTextObjects1= [];
gdjs.Level4BOSSDIOCode.GDNewTextObjects2= [];
gdjs.Level4BOSSDIOCode.GDNewTextObjects3= [];
gdjs.Level4BOSSDIOCode.GDNewText2Objects1= [];
gdjs.Level4BOSSDIOCode.GDNewText2Objects2= [];
gdjs.Level4BOSSDIOCode.GDNewText2Objects3= [];
gdjs.Level4BOSSDIOCode.GDNewSprite2Objects1= [];
gdjs.Level4BOSSDIOCode.GDNewSprite2Objects2= [];
gdjs.Level4BOSSDIOCode.GDNewSprite2Objects3= [];
gdjs.Level4BOSSDIOCode.GDBlobBossObjects1= [];
gdjs.Level4BOSSDIOCode.GDBlobBossObjects2= [];
gdjs.Level4BOSSDIOCode.GDBlobBossObjects3= [];
gdjs.Level4BOSSDIOCode.GDLeafSpawnerObjects1= [];
gdjs.Level4BOSSDIOCode.GDLeafSpawnerObjects2= [];
gdjs.Level4BOSSDIOCode.GDLeafSpawnerObjects3= [];
gdjs.Level4BOSSDIOCode.GDLevelEditorObjects1= [];
gdjs.Level4BOSSDIOCode.GDLevelEditorObjects2= [];
gdjs.Level4BOSSDIOCode.GDLevelEditorObjects3= [];


gdjs.Level4BOSSDIOCode.asyncCallback21900508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level4BOSSDIOCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("DioBox"), gdjs.Level4BOSSDIOCode.GDDioBoxObjects3);
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("You Kidnapped My Mother!");
}{for(var i = 0, len = gdjs.Level4BOSSDIOCode.GDDioBoxObjects3.length ;i < len;++i) {
    gdjs.Level4BOSSDIOCode.GDDioBoxObjects3[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}gdjs.Level4BOSSDIOCode.localVariables.length = 0;
}
gdjs.Level4BOSSDIOCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level4BOSSDIOCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Level4BOSSDIOCode.asyncCallback21900508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level4BOSSDIOCode.asyncCallback21903268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level4BOSSDIOCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BlobBoss"), gdjs.Level4BOSSDIOCode.GDBlobBossObjects3);
gdjs.copyArray(runtimeScene.getObjects("DioBox"), gdjs.Level4BOSSDIOCode.GDDioBoxObjects3);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Level4BOSSDIOCode.GDNewSpriteObjects3);
{for(var i = 0, len = gdjs.Level4BOSSDIOCode.GDBlobBossObjects3.length ;i < len;++i) {
    gdjs.Level4BOSSDIOCode.GDBlobBossObjects3[i].getBehavior("Tween").addObjectPositionXTween2("DiologPlayBoss", -(304), "easeOutQuad", 0.2, false);
}
}{for(var i = 0, len = gdjs.Level4BOSSDIOCode.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.Level4BOSSDIOCode.GDNewSpriteObjects3[i].getBehavior("Tween").addObjectPositionXTween2("DiologPlay", -(1596), "easeOutQuad", 0.2, false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("Yes....  Yes I Did.");
}{for(var i = 0, len = gdjs.Level4BOSSDIOCode.GDDioBoxObjects3.length ;i < len;++i) {
    gdjs.Level4BOSSDIOCode.GDDioBoxObjects3[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}gdjs.Level4BOSSDIOCode.localVariables.length = 0;
}
gdjs.Level4BOSSDIOCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level4BOSSDIOCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Level4BOSSDIOCode.asyncCallback21903268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level4BOSSDIOCode.asyncCallback21906540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level4BOSSDIOCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("DioBox"), gdjs.Level4BOSSDIOCode.GDDioBoxObjects3);
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("Well.. Uhm... Give Her Back");
}{for(var i = 0, len = gdjs.Level4BOSSDIOCode.GDDioBoxObjects3.length ;i < len;++i) {
    gdjs.Level4BOSSDIOCode.GDDioBoxObjects3[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}gdjs.Level4BOSSDIOCode.localVariables.length = 0;
}
gdjs.Level4BOSSDIOCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level4BOSSDIOCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Level4BOSSDIOCode.asyncCallback21906540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level4BOSSDIOCode.asyncCallback21908684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level4BOSSDIOCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("DioBox"), gdjs.Level4BOSSDIOCode.GDDioBoxObjects3);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Level4BOSSDIOCode.GDNewSpriteObjects3);
{for(var i = 0, len = gdjs.Level4BOSSDIOCode.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.Level4BOSSDIOCode.GDNewSpriteObjects3[i].getBehavior("Tween").addObjectPositionXTween2("DiologPlay", -(1596), "easeOutQuad", 0.2, false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("Do You Think Im Stupid...");
}{for(var i = 0, len = gdjs.Level4BOSSDIOCode.GDDioBoxObjects3.length ;i < len;++i) {
    gdjs.Level4BOSSDIOCode.GDDioBoxObjects3[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}gdjs.Level4BOSSDIOCode.localVariables.length = 0;
}
gdjs.Level4BOSSDIOCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level4BOSSDIOCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Level4BOSSDIOCode.asyncCallback21908684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level4BOSSDIOCode.asyncCallback21911628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level4BOSSDIOCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("DioBox"), gdjs.Level4BOSSDIOCode.GDDioBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Level4BOSSDIOCode.GDNewSpriteObjects2);
{for(var i = 0, len = gdjs.Level4BOSSDIOCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Level4BOSSDIOCode.GDNewSpriteObjects2[i].getBehavior("Tween").addObjectPositionXTween2("DiologPlay", -(286), "easeOutQuad", 0.2, false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("Lets Battle!");
}{for(var i = 0, len = gdjs.Level4BOSSDIOCode.GDDioBoxObjects2.length ;i < len;++i) {
    gdjs.Level4BOSSDIOCode.GDDioBoxObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}gdjs.Level4BOSSDIOCode.localVariables.length = 0;
}
gdjs.Level4BOSSDIOCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level4BOSSDIOCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Level4BOSSDIOCode.asyncCallback21911628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level4BOSSDIOCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Level4BOSSDIOCode.GDNewTextObjects2);
{for(var i = 0, len = gdjs.Level4BOSSDIOCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.Level4BOSSDIOCode.GDNewTextObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlobBoss"), gdjs.Level4BOSSDIOCode.GDBlobBossObjects2);
gdjs.copyArray(runtimeScene.getObjects("DioBox"), gdjs.Level4BOSSDIOCode.GDDioBoxObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("Blorb!");
}{for(var i = 0, len = gdjs.Level4BOSSDIOCode.GDDioBoxObjects2.length ;i < len;++i) {
    gdjs.Level4BOSSDIOCode.GDDioBoxObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(2);
}{for(var i = 0, len = gdjs.Level4BOSSDIOCode.GDBlobBossObjects2.length ;i < len;++i) {
    gdjs.Level4BOSSDIOCode.GDBlobBossObjects2[i].getBehavior("Tween").addObjectPositionXTween2("DiologPlayBoss", -(1395), "easeOutQuad", 0.2, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21900436);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level4BOSSDIOCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21903196);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level4BOSSDIOCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21906004);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Level4BOSSDIOCode.GDNewSpriteObjects2);
{for(var i = 0, len = gdjs.Level4BOSSDIOCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Level4BOSSDIOCode.GDNewSpriteObjects2[i].getBehavior("Tween").addObjectPositionXTween2("DiologPlay", -(286), "easeOutQuad", 0.2, false);
}
}
{ //Subevents
gdjs.Level4BOSSDIOCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21908484);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level4BOSSDIOCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21911556);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level4BOSSDIOCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Level4BOSSDIOCode.eventsList6 = function(runtimeScene) {

{


gdjs.Level4BOSSDIOCode.eventsList5(runtimeScene);
}


};

gdjs.Level4BOSSDIOCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level4BOSSDIOCode.GDNewSpriteObjects1.length = 0;
gdjs.Level4BOSSDIOCode.GDNewSpriteObjects2.length = 0;
gdjs.Level4BOSSDIOCode.GDNewSpriteObjects3.length = 0;
gdjs.Level4BOSSDIOCode.GDDioBoxObjects1.length = 0;
gdjs.Level4BOSSDIOCode.GDDioBoxObjects2.length = 0;
gdjs.Level4BOSSDIOCode.GDDioBoxObjects3.length = 0;
gdjs.Level4BOSSDIOCode.GDNewTextObjects1.length = 0;
gdjs.Level4BOSSDIOCode.GDNewTextObjects2.length = 0;
gdjs.Level4BOSSDIOCode.GDNewTextObjects3.length = 0;
gdjs.Level4BOSSDIOCode.GDNewText2Objects1.length = 0;
gdjs.Level4BOSSDIOCode.GDNewText2Objects2.length = 0;
gdjs.Level4BOSSDIOCode.GDNewText2Objects3.length = 0;
gdjs.Level4BOSSDIOCode.GDNewSprite2Objects1.length = 0;
gdjs.Level4BOSSDIOCode.GDNewSprite2Objects2.length = 0;
gdjs.Level4BOSSDIOCode.GDNewSprite2Objects3.length = 0;
gdjs.Level4BOSSDIOCode.GDBlobBossObjects1.length = 0;
gdjs.Level4BOSSDIOCode.GDBlobBossObjects2.length = 0;
gdjs.Level4BOSSDIOCode.GDBlobBossObjects3.length = 0;
gdjs.Level4BOSSDIOCode.GDLeafSpawnerObjects1.length = 0;
gdjs.Level4BOSSDIOCode.GDLeafSpawnerObjects2.length = 0;
gdjs.Level4BOSSDIOCode.GDLeafSpawnerObjects3.length = 0;
gdjs.Level4BOSSDIOCode.GDLevelEditorObjects1.length = 0;
gdjs.Level4BOSSDIOCode.GDLevelEditorObjects2.length = 0;
gdjs.Level4BOSSDIOCode.GDLevelEditorObjects3.length = 0;

gdjs.Level4BOSSDIOCode.eventsList6(runtimeScene);
gdjs.Level4BOSSDIOCode.GDNewSpriteObjects1.length = 0;
gdjs.Level4BOSSDIOCode.GDNewSpriteObjects2.length = 0;
gdjs.Level4BOSSDIOCode.GDNewSpriteObjects3.length = 0;
gdjs.Level4BOSSDIOCode.GDDioBoxObjects1.length = 0;
gdjs.Level4BOSSDIOCode.GDDioBoxObjects2.length = 0;
gdjs.Level4BOSSDIOCode.GDDioBoxObjects3.length = 0;
gdjs.Level4BOSSDIOCode.GDNewTextObjects1.length = 0;
gdjs.Level4BOSSDIOCode.GDNewTextObjects2.length = 0;
gdjs.Level4BOSSDIOCode.GDNewTextObjects3.length = 0;
gdjs.Level4BOSSDIOCode.GDNewText2Objects1.length = 0;
gdjs.Level4BOSSDIOCode.GDNewText2Objects2.length = 0;
gdjs.Level4BOSSDIOCode.GDNewText2Objects3.length = 0;
gdjs.Level4BOSSDIOCode.GDNewSprite2Objects1.length = 0;
gdjs.Level4BOSSDIOCode.GDNewSprite2Objects2.length = 0;
gdjs.Level4BOSSDIOCode.GDNewSprite2Objects3.length = 0;
gdjs.Level4BOSSDIOCode.GDBlobBossObjects1.length = 0;
gdjs.Level4BOSSDIOCode.GDBlobBossObjects2.length = 0;
gdjs.Level4BOSSDIOCode.GDBlobBossObjects3.length = 0;
gdjs.Level4BOSSDIOCode.GDLeafSpawnerObjects1.length = 0;
gdjs.Level4BOSSDIOCode.GDLeafSpawnerObjects2.length = 0;
gdjs.Level4BOSSDIOCode.GDLeafSpawnerObjects3.length = 0;
gdjs.Level4BOSSDIOCode.GDLevelEditorObjects1.length = 0;
gdjs.Level4BOSSDIOCode.GDLevelEditorObjects2.length = 0;
gdjs.Level4BOSSDIOCode.GDLevelEditorObjects3.length = 0;


return;

}

gdjs['Level4BOSSDIOCode'] = gdjs.Level4BOSSDIOCode;
