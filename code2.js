gdjs.Splash2Code = {};
gdjs.Splash2Code.localVariables = [];
gdjs.Splash2Code.GDLogoObjects1= [];
gdjs.Splash2Code.GDLogoObjects2= [];
gdjs.Splash2Code.GDLogoObjects3= [];
gdjs.Splash2Code.GDLogoObjects4= [];
gdjs.Splash2Code.GDPresentsObjects1= [];
gdjs.Splash2Code.GDPresentsObjects2= [];
gdjs.Splash2Code.GDPresentsObjects3= [];
gdjs.Splash2Code.GDPresentsObjects4= [];
gdjs.Splash2Code.GDFadeObjects1= [];
gdjs.Splash2Code.GDFadeObjects2= [];
gdjs.Splash2Code.GDFadeObjects3= [];
gdjs.Splash2Code.GDFadeObjects4= [];
gdjs.Splash2Code.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.Splash2Code.GDBlackSquareDecoratedButtonObjects2= [];
gdjs.Splash2Code.GDBlackSquareDecoratedButtonObjects3= [];
gdjs.Splash2Code.GDBlackSquareDecoratedButtonObjects4= [];
gdjs.Splash2Code.GDNewTextObjects1= [];
gdjs.Splash2Code.GDNewTextObjects2= [];
gdjs.Splash2Code.GDNewTextObjects3= [];
gdjs.Splash2Code.GDNewTextObjects4= [];
gdjs.Splash2Code.GDLeafSpawnerObjects1= [];
gdjs.Splash2Code.GDLeafSpawnerObjects2= [];
gdjs.Splash2Code.GDLeafSpawnerObjects3= [];
gdjs.Splash2Code.GDLeafSpawnerObjects4= [];
gdjs.Splash2Code.GDLevelEditorObjects1= [];
gdjs.Splash2Code.GDLevelEditorObjects2= [];
gdjs.Splash2Code.GDLevelEditorObjects3= [];
gdjs.Splash2Code.GDLevelEditorObjects4= [];


gdjs.Splash2Code.asyncCallback21171828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Splash2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Load", false);
}gdjs.Splash2Code.localVariables.length = 0;
}
gdjs.Splash2Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Splash2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Splash2Code.asyncCallback21171828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Splash2Code.asyncCallback21171172 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Splash2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Fade"), gdjs.Splash2Code.GDFadeObjects3);

{for(var i = 0, len = gdjs.Splash2Code.GDFadeObjects3.length ;i < len;++i) {
    gdjs.Splash2Code.GDFadeObjects3[i].getBehavior("Tween").addObjectOpacityTween2("FadeTween", 255, "linear", 1, false);
}
}
{ //Subevents
gdjs.Splash2Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Splash2Code.localVariables.length = 0;
}
gdjs.Splash2Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Splash2Code.localVariables);
for (const obj of gdjs.Splash2Code.GDFadeObjects2) asyncObjectsList.addObject("Fade", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.Splash2Code.asyncCallback21171172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Splash2Code.asyncCallback21170516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Splash2Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.Splash2Code.GDFadeObjects2);
{for(var i = 0, len = gdjs.Splash2Code.GDFadeObjects2.length ;i < len;++i) {
    gdjs.Splash2Code.GDFadeObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FadeTween", 0, "linear", 1, false);
}
}
{ //Subevents
gdjs.Splash2Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Splash2Code.localVariables.length = 0;
}
gdjs.Splash2Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Splash2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Splash2Code.asyncCallback21170516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Splash2Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Splash");
}
{ //Subevents
gdjs.Splash2Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Splash2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Splash2Code.GDLogoObjects1.length = 0;
gdjs.Splash2Code.GDLogoObjects2.length = 0;
gdjs.Splash2Code.GDLogoObjects3.length = 0;
gdjs.Splash2Code.GDLogoObjects4.length = 0;
gdjs.Splash2Code.GDPresentsObjects1.length = 0;
gdjs.Splash2Code.GDPresentsObjects2.length = 0;
gdjs.Splash2Code.GDPresentsObjects3.length = 0;
gdjs.Splash2Code.GDPresentsObjects4.length = 0;
gdjs.Splash2Code.GDFadeObjects1.length = 0;
gdjs.Splash2Code.GDFadeObjects2.length = 0;
gdjs.Splash2Code.GDFadeObjects3.length = 0;
gdjs.Splash2Code.GDFadeObjects4.length = 0;
gdjs.Splash2Code.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.Splash2Code.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.Splash2Code.GDBlackSquareDecoratedButtonObjects3.length = 0;
gdjs.Splash2Code.GDBlackSquareDecoratedButtonObjects4.length = 0;
gdjs.Splash2Code.GDNewTextObjects1.length = 0;
gdjs.Splash2Code.GDNewTextObjects2.length = 0;
gdjs.Splash2Code.GDNewTextObjects3.length = 0;
gdjs.Splash2Code.GDNewTextObjects4.length = 0;
gdjs.Splash2Code.GDLeafSpawnerObjects1.length = 0;
gdjs.Splash2Code.GDLeafSpawnerObjects2.length = 0;
gdjs.Splash2Code.GDLeafSpawnerObjects3.length = 0;
gdjs.Splash2Code.GDLeafSpawnerObjects4.length = 0;
gdjs.Splash2Code.GDLevelEditorObjects1.length = 0;
gdjs.Splash2Code.GDLevelEditorObjects2.length = 0;
gdjs.Splash2Code.GDLevelEditorObjects3.length = 0;
gdjs.Splash2Code.GDLevelEditorObjects4.length = 0;

gdjs.Splash2Code.eventsList3(runtimeScene);
gdjs.Splash2Code.GDLogoObjects1.length = 0;
gdjs.Splash2Code.GDLogoObjects2.length = 0;
gdjs.Splash2Code.GDLogoObjects3.length = 0;
gdjs.Splash2Code.GDLogoObjects4.length = 0;
gdjs.Splash2Code.GDPresentsObjects1.length = 0;
gdjs.Splash2Code.GDPresentsObjects2.length = 0;
gdjs.Splash2Code.GDPresentsObjects3.length = 0;
gdjs.Splash2Code.GDPresentsObjects4.length = 0;
gdjs.Splash2Code.GDFadeObjects1.length = 0;
gdjs.Splash2Code.GDFadeObjects2.length = 0;
gdjs.Splash2Code.GDFadeObjects3.length = 0;
gdjs.Splash2Code.GDFadeObjects4.length = 0;
gdjs.Splash2Code.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.Splash2Code.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.Splash2Code.GDBlackSquareDecoratedButtonObjects3.length = 0;
gdjs.Splash2Code.GDBlackSquareDecoratedButtonObjects4.length = 0;
gdjs.Splash2Code.GDNewTextObjects1.length = 0;
gdjs.Splash2Code.GDNewTextObjects2.length = 0;
gdjs.Splash2Code.GDNewTextObjects3.length = 0;
gdjs.Splash2Code.GDNewTextObjects4.length = 0;
gdjs.Splash2Code.GDLeafSpawnerObjects1.length = 0;
gdjs.Splash2Code.GDLeafSpawnerObjects2.length = 0;
gdjs.Splash2Code.GDLeafSpawnerObjects3.length = 0;
gdjs.Splash2Code.GDLeafSpawnerObjects4.length = 0;
gdjs.Splash2Code.GDLevelEditorObjects1.length = 0;
gdjs.Splash2Code.GDLevelEditorObjects2.length = 0;
gdjs.Splash2Code.GDLevelEditorObjects3.length = 0;
gdjs.Splash2Code.GDLevelEditorObjects4.length = 0;


return;

}

gdjs['Splash2Code'] = gdjs.Splash2Code;
