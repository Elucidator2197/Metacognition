var Austro1 = function() {
    var austronaut1 = null;
    var _Austro1 = this;
    this.STOPPED = true;
    this.canvas = $('#canvasAustro1');
    this.NAME = '#canvasAustro1';
    this.stage = new PIXI.Stage(0x000000);
    this.renderer = PIXI.autoDetectRenderer(this.canvas.width(), this.canvas.height(), this.canvas.get(0), true, true);
    var mission1 = {};
    mission1.x = {};
    mission1.x.min = 25;
    mission1.x.max = 325;
    mission1.y = {};
    mission1.y.min = 380;
    mission1.y.max = 30;
    mission1.scale = {};
    mission1.scale.min = 0.6;
    mission1.scale.max = 1.2;
    mission1.rotation = {};
    mission1.rotation.min = -0.9;
    mission1.rotation.max = 0.3;
    mission1.phase = 1;
    this.init = function(f,g) {
        astronaut1 = new PIXI.Sprite(PIXI.Texture.fromImage("img/austronaut.png"));
        astronaut1.position.x = f;
        astronaut1.position.y = g;
        astronaut1.scale.x = mission1.scale.min;
        astronaut1.scale.y = mission1.scale.min;
        astronaut1.rotation = mission1.rotation.min;
        astronaut1.pivot.set(50, 50);
        _Austro1.stage.addChild(astronaut1)
        _Austro1.animate();
    }
    this.animate = function() {
        requestAnimFrame(_Austro1.animate);
        if (_Austro1.STOPPED)
            return;
        if (mission1.phase == 1) {
            if (astronaut1.position.x < mission1.x.max)
                astronaut1.position.x += 0.1;
            if (astronaut1.position.y > mission1.y.max)
                astronaut1.position.y -= 0.1;
            if (astronaut1.scale.x < mission1.scale.max) {
                astronaut1.scale.x += 0.0002;
                astronaut1.scale.y += 0.0002;
            }
            if (astronaut1.rotation < mission1.rotation.max)
                astronaut1.rotation += 0.0005;
            if (astronaut1.rotation > mission1.rotation.max)
                mission1.phase = 0;
        }
        if (mission1.phase == 0) {
            if (astronaut1.position.x > mission1.x.min)
                astronaut1.position.x -= 0.1;
            if (astronaut1.position.y < mission1.y.min)
                astronaut1.position.y += 0.1;
            if (astronaut1.scale.x > mission1.scale.min) {
                astronaut1.scale.x -= 0.0002;
                astronaut1.scale.y -= 0.0002;
            }
            if (astronaut1.rotation > mission1.rotation.min)
                astronaut1.rotation -= 0.0005;
            if (astronaut1.rotation <= mission1.rotation.min)
                mission1.phase = 1;
        }
        _Austro1.renderer.render(_Austro1.stage);
    }
    this.stop = function() {
        _Austro1.STOPPED = true;
    }
    this.play = function() {
        _Austro1.STOPPED = false;
    }
}
var B = new Austro1;
B.init(250,380);