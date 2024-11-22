gdjs.TitleCode = {};
gdjs.TitleCode.localVariables = [];
gdjs.TitleCode.GDNewSpriteObjects1= [];
gdjs.TitleCode.GDNewSpriteObjects2= [];
gdjs.TitleCode.GDNewTextObjects1= [];
gdjs.TitleCode.GDNewTextObjects2= [];
gdjs.TitleCode.GDNewSprite2Objects1= [];
gdjs.TitleCode.GDNewSprite2Objects2= [];
gdjs.TitleCode.GDNewSprite3Objects1= [];
gdjs.TitleCode.GDNewSprite3Objects2= [];
gdjs.TitleCode.GDStartObjects1= [];
gdjs.TitleCode.GDStartObjects2= [];
gdjs.TitleCode.GDCreditsObjects1= [];
gdjs.TitleCode.GDCreditsObjects2= [];
gdjs.TitleCode.GDNewText2Objects1= [];
gdjs.TitleCode.GDNewText2Objects2= [];
gdjs.TitleCode.GDLeafSpawnerObjects1= [];
gdjs.TitleCode.GDLeafSpawnerObjects2= [];
gdjs.TitleCode.GDLevelEditorObjects1= [];
gdjs.TitleCode.GDLevelEditorObjects2= [];


gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Cyborg Ninja.mp3");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Cyborg Ninja.mp3", true, 100, 1);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "mus_theme.mp3");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.TitleCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDStartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDStartObjects1[k] = gdjs.TitleCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(3);
}{gdjs.evtTools.sound.unloadSound(runtimeScene, "Cyborg Ninja.mp3");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("WorldMap");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Load", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.TitleCode.GDCreditsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDCreditsObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDCreditsObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDCreditsObjects1[k] = gdjs.TitleCode.GDCreditsObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDCreditsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.unloadSound(runtimeScene, "Cyborg Ninja.mp3");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Credits");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Load", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Load", false);
}{gdjs.evtTools.sound.unloadSound(runtimeScene, "Cyborg Ninja.mp3");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("WorldMap");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.sound.unloadSound(runtimeScene, "Cyborg Ninja.mp3");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Credits");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Load", false);
}}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDNewSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewSpriteObjects2.length = 0;
gdjs.TitleCode.GDNewTextObjects1.length = 0;
gdjs.TitleCode.GDNewTextObjects2.length = 0;
gdjs.TitleCode.GDNewSprite2Objects1.length = 0;
gdjs.TitleCode.GDNewSprite2Objects2.length = 0;
gdjs.TitleCode.GDNewSprite3Objects1.length = 0;
gdjs.TitleCode.GDNewSprite3Objects2.length = 0;
gdjs.TitleCode.GDStartObjects1.length = 0;
gdjs.TitleCode.GDStartObjects2.length = 0;
gdjs.TitleCode.GDCreditsObjects1.length = 0;
gdjs.TitleCode.GDCreditsObjects2.length = 0;
gdjs.TitleCode.GDNewText2Objects1.length = 0;
gdjs.TitleCode.GDNewText2Objects2.length = 0;
gdjs.TitleCode.GDLeafSpawnerObjects1.length = 0;
gdjs.TitleCode.GDLeafSpawnerObjects2.length = 0;
gdjs.TitleCode.GDLevelEditorObjects1.length = 0;
gdjs.TitleCode.GDLevelEditorObjects2.length = 0;

gdjs.TitleCode.eventsList0(runtimeScene);
gdjs.TitleCode.GDNewSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewSpriteObjects2.length = 0;
gdjs.TitleCode.GDNewTextObjects1.length = 0;
gdjs.TitleCode.GDNewTextObjects2.length = 0;
gdjs.TitleCode.GDNewSprite2Objects1.length = 0;
gdjs.TitleCode.GDNewSprite2Objects2.length = 0;
gdjs.TitleCode.GDNewSprite3Objects1.length = 0;
gdjs.TitleCode.GDNewSprite3Objects2.length = 0;
gdjs.TitleCode.GDStartObjects1.length = 0;
gdjs.TitleCode.GDStartObjects2.length = 0;
gdjs.TitleCode.GDCreditsObjects1.length = 0;
gdjs.TitleCode.GDCreditsObjects2.length = 0;
gdjs.TitleCode.GDNewText2Objects1.length = 0;
gdjs.TitleCode.GDNewText2Objects2.length = 0;
gdjs.TitleCode.GDLeafSpawnerObjects1.length = 0;
gdjs.TitleCode.GDLeafSpawnerObjects2.length = 0;
gdjs.TitleCode.GDLevelEditorObjects1.length = 0;
gdjs.TitleCode.GDLevelEditorObjects2.length = 0;


return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
