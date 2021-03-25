(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game_atlas_1", frames: [[0,1821,931,64],[0,0,1200,900],[0,902,1200,679],[0,1583,788,236]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_14 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logogrande = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.logouepbcomputacao = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.grafico_pressione_botao = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,465.5,32);


(lib.g_logo_uepb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.logouepbcomputacao();
	this.instance.setTransform(-42,-5,0.7162,0.7162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-5,564.4,169.1);


(lib.g_logo_grande = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.logogrande();
	this.instance.setTransform(0,0,0.8562,0.8562);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1027.5,581.4);


(lib.g_loader_bar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EgnEADrIAAnVMBOJAAAIAAHVg");
	this.shape.setTransform(250.05,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500.1,47);


(lib.g_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.background();
	this.instance.setTransform(0,0,0.9367,0.9366);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1124,843);


(lib.pressioneumbotao = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.grafico_pressione_botao("synched",0);
	this.instance.setTransform(232.8,16,1,1,0,0,0,232.8,16);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(15).to({startPosition:0},0).to({alpha:0},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,465.5,32);


(lib.m_loader = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1C2E68").ss(3,1,1).p("EgnEgDqMBOJAAAIAAHVMhOJAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Camada_2
	this.txt_porcentagem = new cjs.Text("0%", "25px 'Verdana'", "#FFFFFF");
	this.txt_porcentagem.name = "txt_porcentagem";
	this.txt_porcentagem.textAlign = "center";
	this.txt_porcentagem.lineHeight = 32;
	this.txt_porcentagem.lineWidth = 100;
	this.txt_porcentagem.parent = this;
	this.txt_porcentagem.setTransform(0,-11.2);

	this.barra_carregamento = new lib.g_loader_bar("synched",0);
	this.barra_carregamento.name = "barra_carregamento";
	this.barra_carregamento.setTransform(0.05,0,1,1,0,0,0,250.1,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.barra_carregamento},{t:this.txt_porcentagem}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_loader, new cjs.Rectangle(-251.5,-25,503.1,50), null);


// stage content:
(lib.game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Intro:1,Main:80,PressioneBotao:120};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,120];
	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.preload = null;
		
		self.images = [
			{id: "game_atlas_1", src: "images/game_atlas_1.png"}
		];
		
		self.fonts = [
			{id: 'font-css', src:'fonts/fonts.css'},
			{id: 'font-1', src:'fonts/ubuntu.woff2'},
			{id: 'font-2', src:'fonts/ubuntu-bold.woff2'},
			{id: 'font-3', src:'fonts/ubuntu-bold-italic.woff2'},
			{id: 'font-4', src:'fonts/ubuntu-italic.woff2'},
			{id: 'font-5', src:'fonts/ubuntu-light.woff2'},
			{id: 'font-6', src:'fonts/ubuntu-light-italic.woff2'},
			{id: 'font-7', src:'fonts/ubuntu-medium.woff2'},
			{id: 'font-8', src:'fonts/ubuntu-medium-italic.woff2'}
		];
			
		self.sounds = [
			{id: '_1000', src: 'sounds/_1000.mp3', type: createjs.Types.SOUND},
			{id: '_2000', src: 'sounds/_2000.mp3', type: createjs.Types.SOUND},
			{id: '_3000', src: 'sounds/_3000.mp3', type: createjs.Types.SOUND},
			{id: '_4000', src: 'sounds/_4000.mp3', type: createjs.Types.SOUND},
			{id: '_5000', src: 'sounds/_5000.mp3', type: createjs.Types.SOUND},
			{id: '_10000', src: 'sounds/_10000.mp3', type: createjs.Types.SOUND},
			{id: '_20000', src: 'sounds/_20000.mp3', type: createjs.Types.SOUND},
			{id: '_30000', src: 'sounds/_30000.mp3', type: createjs.Types.SOUND},
			{id: '_40000', src: 'sounds/_40000.mp3', type: createjs.Types.SOUND},
			{id: '_50000', src: 'sounds/_50000.mp3', type: createjs.Types.SOUND},
			{id: '_100000a', src: 'sounds/_100000a.mp3', type: createjs.Types.SOUND},
			{id: '_100000b', src: 'sounds/_100000b.mp3', type: createjs.Types.SOUND},
			{id: '_200000', src: 'sounds/_200000.mp3', type: createjs.Types.SOUND},
			{id: '_300000', src: 'sounds/_300000.mp3', type: createjs.Types.SOUND},
			{id: '_400000', src: 'sounds/_400000.mp3', type: createjs.Types.SOUND},
			{id: '_500000', src: 'sounds/_500000.mp3', type: createjs.Types.SOUND},
			{id: '_1000000', src: 'sounds/_1000000.mp3', type: createjs.Types.SOUND},
			{id: 'ajuda01', src: 'sounds/ajuda01.mp3', type: createjs.Types.SOUND},
			{id: 'ajuda02', src: 'sounds/ajuda02.mp3', type: createjs.Types.SOUND},
			{id: 'boasorte', src: 'sounds/boasorte.mp3', type: createjs.Types.SOUND},
			{id: 'caminhocerto', src: 'sounds/caminhocerto.mp3', type: createjs.Types.SOUND},
			{id: 'cartas01', src: 'sounds/cartas01.mp3', type: createjs.Types.SOUND},
			{id: 'cartas02', src: 'sounds/cartas02.mp3', type: createjs.Types.SOUND},
			{id: 'cartas03', src: 'sounds/cartas03.mp3', type: createjs.Types.SOUND},
			{id: 'cartas04', src: 'sounds/cartas04.mp3', type: createjs.Types.SOUND},
			{id: 'certa01', src: 'sounds/certa01.mp3', type: createjs.Types.SOUND},
			{id: 'certa02', src: 'sounds/certa02.mp3', type: createjs.Types.SOUND},
			{id: 'certeza01', src: 'sounds/certeza01.mp3', type: createjs.Types.SOUND},
			{id: 'certeza02', src: 'sounds/certeza02.mp3', type: createjs.Types.SOUND},
			{id: 'certeza03', src: 'sounds/certeza03.mp3', type: createjs.Types.SOUND},
			{id: 'clock', src: 'sounds/clock.mp3', type:createjs.Types.SOUND},
			{id: 'colegas', src: 'sounds/colegas.mp3', type: createjs.Types.SOUND},
			{id: 'comecar', src: 'sounds/comecar.mp3', type: createjs.Types.SOUND},
			{id: 'convidados', src: 'sounds/convidados.mp3', type: createjs.Types.SOUND},
			{id: 'creditos', src: 'sounds/creditos.mp3', type: createjs.Types.SOUND},
			{id: 'entendeu01', src: 'sounds/entendeu01.mp3', type: createjs.Types.SOUND},
			{id: 'entendeu02', src: 'sounds/entendeu02.mp3', type: createjs.Types.SOUND},
			{id: 'entendeu03', src: 'sounds/entendeu03.mp3', type: createjs.Types.SOUND},
			{id: 'errou', src: 'sounds/errou.mp3', type: createjs.Types.SOUND},
			{id: 'ganhou', src: 'sounds/ganhou.mp3', type: createjs.Types.SOUND},
			{id: 'login', src: 'sounds/login.mp3', type: createjs.Types.SOUND},
			{id: 'naoda', src: 'sounds/naoda.mp3', type: createjs.Types.SOUND},
			{id: 'okparou', src: 'sounds/okparou.mp3', type: createjs.Types.SOUND},
			{id: 'parabens', src: 'sounds/parabens.mp3', type: createjs.Types.SOUND},
			{id: 'parou500mil01', src: 'sounds/parou500mil01.mp3', type: createjs.Types.SOUND},
			{id: 'parou500mil02', src: 'sounds/parou500mil02.mp3', type: createjs.Types.SOUND},
			{id: 'qualresposta', src: 'sounds/qualresposta.mp3', type: createjs.Types.SOUND},
			{id: 'recursos01', src: 'sounds/recursos01.mp3', type: createjs.Types.SOUND},
			{id: 'recursos02', src: 'sounds/recursos02.mp3', type: createjs.Types.SOUND},
			{id: 'suspense', src: 'sounds/suspense.mp3', type: createjs.Types.SOUND},
			{id: 'tchau', src: 'sounds/tchau.mp3', type: createjs.Types.SOUND},
			{id: 'temacompleto', src: 'sounds/temacompleto.mp3', type: createjs.Types.SOUND},
			{id: 'temaloop', src: 'sounds/temaloop.mp3', type: createjs.Types.SOUND},
			{id: 'tempo01', src: 'sounds/tempo01.mp3', type: createjs.Types.SOUND},
			{id: 'tempo02', src: 'sounds/tempo02.mp3', type: createjs.Types.SOUND},
			{id: 'vaiparar01', src: 'sounds/vaiparar01.mp3', type: createjs.Types.SOUND},
			{id: 'vaiparar02', src: 'sounds/vaiparar02.mp3', type: createjs.Types.SOUND},
			{id: 'vaipular01', src: 'sounds/vaipular01.mp3', type: createjs.Types.SOUND},
			{id: 'vaipular02', src: 'sounds/vaipular02.mp3', type: createjs.Types.SOUND},
			{id: 'vaiserdificil', src: 'sounds/vaiserdificil.mp3', type: createjs.Types.SOUND}
		];
		
		function init() {
			self.preload = new createjs.LoadQueue();
			self.preload.installPlugin(createjs.Sound);
			self.preload.on('progress', onProgress);
			self.preload.on('error', onError);
			self.preload.on('complete', onComplete);
			self.preload.loadManifest(self.fonts.concat(self.sounds)); //self.images
		}
			
		function onError(event) {
			console.log('ERRO: ' + event.text);
		}
		
		function onProgress(event) {
			var progress = Math.round(event.loaded * 100);
			self.preloader.barra_carregamento.scaleX = event.loaded;
			self.preloader.txt_porcentagem.text = progress + '%';
		}
		
		function onComplete(event) {
			self.gotoAndPlay("Intro");
			
			var musica = createjs.Sound.play(['temacompleto', 'temaloop'][getRandomInt(0, 1)], {interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1});
			musica.volume = 0.15;
			
			window.addEventListener("keypress", function(e){
				if(getCurrentFrame() == 121) {
					gotoMenu();
				}
			});
			
			window.addEventListener("click", function(e){
				if(getCurrentFrame() == 121) {
					gotoMenu();
				}
			});
		}
		
		function gotoMenu() {
			let som = createjs.Sound.play('comecar');
		}
		
		function getCurrentFrame() {
			return self.currentFrame + 1;
		}
		
		function getRandomInt(min, max) {
		    min = Math.ceil(min);
		    max = Math.floor(max);
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
		init();
		this.stop();
	}
	this.frame_120 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120).call(this.frame_120).wait(1));

	// Preloader
	this.preloader = new lib.m_loader();
	this.preloader.name = "preloader";
	this.preloader.setTransform(762.1,407.5,1,1,0,0,0,250.1,23.5);

	this.timeline.addTween(cjs.Tween.get(this.preloader).to({_off:true},1).wait(120));

	// Pressione_botao
	this.movieClip_1 = new lib.pressioneumbotao();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(514.25,616,1,1,0,0,0,235,16);
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(120).to({_off:false},0).wait(1));

	// Logo_grande
	this.instance = new lib.g_logo_grande("synched",0);
	this.instance.setTransform(512,346,1,1,0,0,0,513.7,290.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({_off:false},0).to({alpha:1},20).wait(1));

	// Logo_UEPB
	this.instance_1 = new lib.g_logo_uepb("synched",0);
	this.instance_1.setTransform(511.9,383.95,0.734,0.7339,0,0,0,238.3,75.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:1},19).wait(40).to({startPosition:0},0).to({alpha:0},20).to({_off:true},1).wait(40));

	// Plano_de_fundo_imagem
	this.instance_2 = new lib.g_background("synched",0);
	this.instance_2.setTransform(512,352,1,1,0,0,0,562,421.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80).to({_off:false},0).to({alpha:1},20).wait(21));

	// Plano_de_fundo_solido
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B1EFF8").s().p("EhQyA8zMAAAh5lMChlAAAMAAAB5lg");
	this.shape.setTransform(513.175,385.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(121));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(462,314.5,612,459.79999999999995);
// library properties:
lib.properties = {
	id: '32E3557946A0FD4F9C3779F1E63292B1',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/game_atlas_1.png?1616648053400", id:"game_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['32E3557946A0FD4F9C3779F1E63292B1'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;