gdjs.CreditsCode = {};
gdjs.CreditsCode.localVariables = [];
gdjs.CreditsCode.GDCreditsObjects1= [];
gdjs.CreditsCode.GDCreditsObjects2= [];
gdjs.CreditsCode.GDNewSpriteObjects1= [];
gdjs.CreditsCode.GDNewSpriteObjects2= [];
gdjs.CreditsCode.GDNewTextObjects1= [];
gdjs.CreditsCode.GDNewTextObjects2= [];
gdjs.CreditsCode.GDLeafSpawnerObjects1= [];
gdjs.CreditsCode.GDLeafSpawnerObjects2= [];
gdjs.CreditsCode.GDLevelEditorObjects1= [];
gdjs.CreditsCode.GDLevelEditorObjects2= [];


gdjs.CreditsCode.asyncCallback22337060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CreditsCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}gdjs.CreditsCode.localVariables.length = 0;
}
gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CreditsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(120), (runtimeScene) => (gdjs.CreditsCode.asyncCallback22337060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CreditsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.CreditsCode.GDCreditsObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsObjects1[i].getBehavior("Tween").addObjectPositionYTween2("CredTw", -(6340), "linear", 40, false);
}
}
{ //Subevents
gdjs.CreditsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.CreditsCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDNewSpriteObjects1[k] = gdjs.CreditsCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 0, 0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Title");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Mega Hyper Ultrastorm.mp3", 0, false, 100, 1);
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDCreditsObjects1.length = 0;
gdjs.CreditsCode.GDCreditsObjects2.length = 0;
gdjs.CreditsCode.GDNewSpriteObjects1.length = 0;
gdjs.CreditsCode.GDNewSpriteObjects2.length = 0;
gdjs.CreditsCode.GDNewTextObjects1.length = 0;
gdjs.CreditsCode.GDNewTextObjects2.length = 0;
gdjs.CreditsCode.GDLeafSpawnerObjects1.length = 0;
gdjs.CreditsCode.GDLeafSpawnerObjects2.length = 0;
gdjs.CreditsCode.GDLevelEditorObjects1.length = 0;
gdjs.CreditsCode.GDLevelEditorObjects2.length = 0;

gdjs.CreditsCode.eventsList1(runtimeScene);
gdjs.CreditsCode.GDCreditsObjects1.length = 0;
gdjs.CreditsCode.GDCreditsObjects2.length = 0;
gdjs.CreditsCode.GDNewSpriteObjects1.length = 0;
gdjs.CreditsCode.GDNewSpriteObjects2.length = 0;
gdjs.CreditsCode.GDNewTextObjects1.length = 0;
gdjs.CreditsCode.GDNewTextObjects2.length = 0;
gdjs.CreditsCode.GDLeafSpawnerObjects1.length = 0;
gdjs.CreditsCode.GDLeafSpawnerObjects2.length = 0;
gdjs.CreditsCode.GDLevelEditorObjects1.length = 0;
gdjs.CreditsCode.GDLevelEditorObjects2.length = 0;


return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
