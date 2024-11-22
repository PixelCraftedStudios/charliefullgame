gdjs.SplashCode = {};
gdjs.SplashCode.localVariables = [];
gdjs.SplashCode.GDLogoObjects1= [];
gdjs.SplashCode.GDLogoObjects2= [];
gdjs.SplashCode.GDLogoObjects3= [];
gdjs.SplashCode.GDLogoObjects4= [];
gdjs.SplashCode.GDPresentsObjects1= [];
gdjs.SplashCode.GDPresentsObjects2= [];
gdjs.SplashCode.GDPresentsObjects3= [];
gdjs.SplashCode.GDPresentsObjects4= [];
gdjs.SplashCode.GDFadeObjects1= [];
gdjs.SplashCode.GDFadeObjects2= [];
gdjs.SplashCode.GDFadeObjects3= [];
gdjs.SplashCode.GDFadeObjects4= [];
gdjs.SplashCode.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.SplashCode.GDBlackSquareDecoratedButtonObjects2= [];
gdjs.SplashCode.GDBlackSquareDecoratedButtonObjects3= [];
gdjs.SplashCode.GDBlackSquareDecoratedButtonObjects4= [];
gdjs.SplashCode.GDLeafSpawnerObjects1= [];
gdjs.SplashCode.GDLeafSpawnerObjects2= [];
gdjs.SplashCode.GDLeafSpawnerObjects3= [];
gdjs.SplashCode.GDLeafSpawnerObjects4= [];
gdjs.SplashCode.GDLevelEditorObjects1= [];
gdjs.SplashCode.GDLevelEditorObjects2= [];
gdjs.SplashCode.GDLevelEditorObjects3= [];
gdjs.SplashCode.GDLevelEditorObjects4= [];


gdjs.SplashCode.asyncCallback21200180 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SplashCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Load", false);
}gdjs.SplashCode.localVariables.length = 0;
}
gdjs.SplashCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.SplashCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.SplashCode.asyncCallback21200180(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SplashCode.asyncCallback21199524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SplashCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Fade"), gdjs.SplashCode.GDFadeObjects3);

{for(var i = 0, len = gdjs.SplashCode.GDFadeObjects3.length ;i < len;++i) {
    gdjs.SplashCode.GDFadeObjects3[i].getBehavior("Tween").addObjectOpacityTween2("FadeTween", 255, "linear", 1, false);
}
}
{ //Subevents
gdjs.SplashCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.SplashCode.localVariables.length = 0;
}
gdjs.SplashCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.SplashCode.localVariables);
for (const obj of gdjs.SplashCode.GDFadeObjects2) asyncObjectsList.addObject("Fade", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.SplashCode.asyncCallback21199524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SplashCode.asyncCallback21198724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SplashCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.SplashCode.GDFadeObjects2);
{for(var i = 0, len = gdjs.SplashCode.GDFadeObjects2.length ;i < len;++i) {
    gdjs.SplashCode.GDFadeObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FadeTween", 0, "linear", 1, false);
}
}
{ //Subevents
gdjs.SplashCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.SplashCode.localVariables.length = 0;
}
gdjs.SplashCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SplashCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.SplashCode.asyncCallback21198724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SplashCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Splash2");
}
{ //Subevents
gdjs.SplashCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.SplashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashCode.GDLogoObjects1.length = 0;
gdjs.SplashCode.GDLogoObjects2.length = 0;
gdjs.SplashCode.GDLogoObjects3.length = 0;
gdjs.SplashCode.GDLogoObjects4.length = 0;
gdjs.SplashCode.GDPresentsObjects1.length = 0;
gdjs.SplashCode.GDPresentsObjects2.length = 0;
gdjs.SplashCode.GDPresentsObjects3.length = 0;
gdjs.SplashCode.GDPresentsObjects4.length = 0;
gdjs.SplashCode.GDFadeObjects1.length = 0;
gdjs.SplashCode.GDFadeObjects2.length = 0;
gdjs.SplashCode.GDFadeObjects3.length = 0;
gdjs.SplashCode.GDFadeObjects4.length = 0;
gdjs.SplashCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.SplashCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.SplashCode.GDBlackSquareDecoratedButtonObjects3.length = 0;
gdjs.SplashCode.GDBlackSquareDecoratedButtonObjects4.length = 0;
gdjs.SplashCode.GDLeafSpawnerObjects1.length = 0;
gdjs.SplashCode.GDLeafSpawnerObjects2.length = 0;
gdjs.SplashCode.GDLeafSpawnerObjects3.length = 0;
gdjs.SplashCode.GDLeafSpawnerObjects4.length = 0;
gdjs.SplashCode.GDLevelEditorObjects1.length = 0;
gdjs.SplashCode.GDLevelEditorObjects2.length = 0;
gdjs.SplashCode.GDLevelEditorObjects3.length = 0;
gdjs.SplashCode.GDLevelEditorObjects4.length = 0;

gdjs.SplashCode.eventsList3(runtimeScene);
gdjs.SplashCode.GDLogoObjects1.length = 0;
gdjs.SplashCode.GDLogoObjects2.length = 0;
gdjs.SplashCode.GDLogoObjects3.length = 0;
gdjs.SplashCode.GDLogoObjects4.length = 0;
gdjs.SplashCode.GDPresentsObjects1.length = 0;
gdjs.SplashCode.GDPresentsObjects2.length = 0;
gdjs.SplashCode.GDPresentsObjects3.length = 0;
gdjs.SplashCode.GDPresentsObjects4.length = 0;
gdjs.SplashCode.GDFadeObjects1.length = 0;
gdjs.SplashCode.GDFadeObjects2.length = 0;
gdjs.SplashCode.GDFadeObjects3.length = 0;
gdjs.SplashCode.GDFadeObjects4.length = 0;
gdjs.SplashCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.SplashCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.SplashCode.GDBlackSquareDecoratedButtonObjects3.length = 0;
gdjs.SplashCode.GDBlackSquareDecoratedButtonObjects4.length = 0;
gdjs.SplashCode.GDLeafSpawnerObjects1.length = 0;
gdjs.SplashCode.GDLeafSpawnerObjects2.length = 0;
gdjs.SplashCode.GDLeafSpawnerObjects3.length = 0;
gdjs.SplashCode.GDLeafSpawnerObjects4.length = 0;
gdjs.SplashCode.GDLevelEditorObjects1.length = 0;
gdjs.SplashCode.GDLevelEditorObjects2.length = 0;
gdjs.SplashCode.GDLevelEditorObjects3.length = 0;
gdjs.SplashCode.GDLevelEditorObjects4.length = 0;


return;

}

gdjs['SplashCode'] = gdjs.SplashCode;
