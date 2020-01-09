/* FWDRAPATB */
(function (window){
var FWDRAPATB = function(
			controller,
			parent
		){
		var self = this;
		var prototype = FWDRAPATB.prototype;
		var data = parent.data;

		self.useHEXColorsForSkin_bl = controller.useHEXColorsForSkin_bl;
		self.timeBackgroundColor = controller.data.atbTimeBackgroundColor;
		self.timeTextColorNormal = controller.data.atbTimeTextColorNormal;
		self.timeTextColorSelected = controller.data.atbTimeTextColorSelected;
		self.buttonTextNormalColor = controller.data.atbButtonTextNormalColor;
		self.buttonTextSelectedColor = controller.data.atbButtonTextSelectedColor;
		self.buttonBackgroundNormalColor = controller.data.atbButtonBackgroundNormalColor;
		self.buttonBackgroundSelectedColor = controller.data.atbButtonBackgroundSelectedColor;
		this.embedWindowCloseButtonMargins = data.buttonsMargins;
		this.isMobile_bl = FWDRAPUtils.isMobile;
		self.pa = 0;
		self.pb = 1;
	
		//##########################################//
		/* initialize self */
		//##########################################//
		self.init = function(){
			self.mainHolder_do = new FWDRAPDisplayObject("div");
			self.addChild(self.mainHolder_do);
			
			self.bk_do = new FWDRAPDisplayObject("div");
			self.bk_do.getStyle().width = "100%";
			self.bk_do.getStyle().height = "100%";
			self.bk_do.setAlpha(.9);
			self.bk_do.getStyle().background = "url('" + data.shareBkPath_str + "')";
			self.mainHolder_do.addChild(self.bk_do);

			self.setupLeftAndRight();
			self.setupMainScrubber();

			//setup close button
			FWDRAPSimpleButton.setPrototype();
			self.closeButton_do = new FWDRAPSimpleButton(data.closeClooseN_img, data.embedWindowClosePathS_str, undefined,
					true,
					data.useHEXColorsForSkin_bl,
					data.normalButtonsColor_str,
					data.selectedButtonsColor_str);
			self.closeButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, self.closeButtonOnMouseUpHandler);
			self.mainHolder_do.addChild(self.closeButton_do); 
		};

		this.closeButtonOnMouseUpHandler = function(){
			if(!self.isShowed_bl) return;
			self.hide(true);
		};

		self.positionAndResize = function(){
			self.stageWidth = controller.stageWidth;
			self.stageHeight = controller.stageHeight;
			
			var buttonfinalX = self.stageWidth - self.closeButton_do.w - self.embedWindowCloseButtonMargins;
			var buttonFinalY = self.embedWindowCloseButtonMargins;
			var finalY = 0;

			self.closeButton_do.setX(buttonfinalX);
			self.closeButton_do.setY(buttonFinalY);

			self.setWidth(self.stageWidth);
			self.setHeight(self.stageHeight);
			
			self.mainHolder_do.setWidth(self.stageWidth);
			self.mainHolder_do.setHeight(self.stageHeight);
		
			if(self.bk_do){
				self.bk_do.setWidth(self.stageWidth);
				self.bk_do.setHeight(self.stageHeight);
			}
			
			self.positionText();
			self.positionButtons();
			self.resizeProgress();
			self.resizeMainScrubber();
			setTimeout(function(){
				self.positionText();
				self.positionButtons();
				self.resizeProgress();
				self.resizeMainScrubber();
			}, 300);
		}

		self.setupLeftAndRight = function(){

			self.leftText_do = new FWDRAPDisplayObject("div");
			self.leftText_do.hasTransform3d_bl = false;
			self.leftText_do.hasTransform2d_bl = false;
			self.leftText_do.setBackfaceVisibility();
			self.leftText_do.getStyle().fontFamily = "Arial";
			self.leftText_do.getStyle().fontSize= "12px";
			self.leftText_do.getStyle().whiteSpace= "nowrap";
			self.leftText_do.getStyle().textAlign = "center";
			self.leftText_do.getStyle().padding = "4px";
			self.leftText_do.getStyle().paddingLeft = "4px";
			self.leftText_do.getStyle().paddingRIght = "4px";
			self.leftText_do.getStyle().color = self.timeTextColorNormal;
			self.leftText_do.getStyle().backgroundColor = self.timeBackgroundColor;
			self.leftText_do.getStyle().fontSmoothing = "antialiased";
			self.leftText_do.getStyle().webkitFontSmoothing = "antialiased";
			self.leftText_do.getStyle().textRendering = "optimizeLegibility";
			self.leftText_do.setInnerHTML("00:00");
			self.mainHolder_do.addChild(self.leftText_do);

			self.rightText_do = new FWDRAPDisplayObject("div");
			self.rightText_do.hasTransform3d_bl = false;
			self.rightText_do.hasTransform2d_bl = false;
			self.rightText_do.setBackfaceVisibility();
			self.rightText_do.getStyle().fontFamily = "Arial";
			self.rightText_do.getStyle().fontSize= "12px";
			self.rightText_do.getStyle().whiteSpace= "nowrap";
			self.rightText_do.getStyle().textAlign = "center";
			self.rightText_do.getStyle().padding = "4px";
			self.rightText_do.getStyle().paddingLeft = "6px";
			self.rightText_do.getStyle().paddingRIght = "6px";
			self.rightText_do.getStyle().color = self.timeTextColorNormal;
			self.rightText_do.getStyle().backgroundColor = self.timeBackgroundColor;
			self.rightText_do.getStyle().fontSmoothing = "antialiased";
			self.rightText_do.getStyle().webkitFontSmoothing = "antialiased";
			self.rightText_do.getStyle().textRendering = "optimizeLegibility";
			self.rightText_do.setInnerHTML("00:00");
			self.mainHolder_do.addChild(self.rightText_do);
		}
		

		self.setLeftLabel = function(label){
			self.leftText_do.setInnerHTML(label);
		}

		self.setRightLabel = function(label){
			self.rightText_do.setInnerHTML(label);
		}

		self.setupInitLabels = function(){
			self.pa = 0;
			self.pb = 1;
			self.updateTime();
			self.positionText();
			setTimeout(self.positionText, 300);
		}

		self.updateTime = function(){
			var hasHours = FWDRAPUtils.formatTime(self.duration).length > 5;
			var totalTime = FWDRAPUtils.formatTime(self.duration);
			self.rightTime = FWDRAPUtils.formatTime(self.duration * self.pb);
			self.leftTime = FWDRAPUtils.formatTime(self.duration * self.pa);
			if(self.rightTime.length < 6 && hasHours) self.rightTime = "00:" + self.rightTime; 
			if(self.rightTime.length > 5 && self.leftTime.length < 6) self.leftTime = "00:" + self.leftTime;
			self.setLeftLabel(self.leftTime);
			self.setRightLabel(self.rightTime);
		}

		self.positionText = function(){
			self.leftText_do.setX(parentScrubber_do.x - self.leftText_do.getWidth() - 6);
			self.leftText_do.setY(Math.round((self.stageHeight - self.leftText_do.getHeight())/2) - 1);
			self.rightText_do.setX(parentScrubber_do.x + parentScrubber_do.getWidth() + 3);
			self.rightText_do.setY(Math.round((self.stageHeight - self.rightText_do.getHeight())/2) - 1);
		}

		//################################################//
		/* Setup main scrubber */
		//################################################//
		this.setupMainScrubber = function(){
			//setup background bar
			parentScrubber_do = new FWDRAPDisplayObject("div");
			parentScrubber_do.setOverflow('visible');
			parentScrubber_do.setY(parseInt((controller.stageHeight - controller.scrubbersHeight)/2));
			parentScrubber_do.setHeight(controller.scrubbersHeight);

			var mainScrubberBkLeft_img = new Image();
			mainScrubberBkLeft_img.src = controller.mainScrubberBkLeft_img.src;
			mainScrubberBkLeft_img.width = controller.mainScrubberBkLeft_img.width;
			mainScrubberBkLeft_img.height = controller.mainScrubberBkLeft_img.height;
			parentScrubberBkleftText_do = new FWDRAPDisplayObject("img");
			parentScrubberBkleftText_do.setScreen(mainScrubberBkLeft_img);

			var rightImage = new Image();
			rightImage.src = controller.data.mainScrubberBkRightPath_str;
			parentScrubberBkrightText_do = new FWDRAPDisplayObject("img");
			parentScrubberBkrightText_do.setScreen(rightImage);
			parentScrubberBkrightText_do.setWidth(parentScrubberBkleftText_do.w);
			parentScrubberBkrightText_do.setHeight(parentScrubberBkleftText_do.h);
			
			var middleImage = new Image();
			middleImage.src = controller.mainScrubberBkMiddlePath_str;
			if(self.isMobile_bl){
				parentScrubberBkMiddle_do = new FWDRAPDisplayObject("div");	
				parentScrubberBkMiddle_do.getStyle().background = "url('" + controller.mainScrubberBkMiddlePath_str + "') repeat-x";
			}else{
				parentScrubberBkMiddle_do = new FWDRAPDisplayObject("img");
				parentScrubberBkMiddle_do.setScreen(middleImage);
			}
				
			parentScrubberBkMiddle_do.setHeight(controller.scrubbersHeight);
			parentScrubberBkMiddle_do.setX(controller.scrubbersBkLeftAndRightWidth);

			parentScrubber_do.addChild(parentScrubberBkleftText_do);
			parentScrubber_do.addChild(parentScrubberBkMiddle_do);
			parentScrubber_do.addChild(parentScrubberBkrightText_do);
			self.mainHolder_do.addChild(parentScrubber_do);

			//setup progress bar
			parentScrubberDrag_do = new FWDRAPDisplayObject("div");
			parentScrubberDrag_do.setHeight(controller.scrubbersHeight);
			
			parentScrubberMiddleImage = new Image();
			parentScrubberMiddleImage.src = controller.mainScrubberDragMiddlePath_str;
			
			if(self.useHEXColorsForSkin_bl){
				parentScrubberDragMiddle_do = new FWDRAPDisplayObject("div");
				parentScrubberMiddleImage.onload = function(){
					var testCanvas = FWDRAPUtils.getCanvasWithModifiedColor(parentScrubberMiddleImage, controller.normalButtonsColor_str, true);
					parentSCrubberMiddleCanvas = testCanvas.canvas;
					parentSCrubberDragMiddleImageBackground = testCanvas.image;
					parentScrubberDragMiddle_do.getStyle().background = "url('" + parentSCrubberDragMiddleImageBackground.src + "') repeat-x";
				}
			}else{
				parentScrubberDragMiddle_do = new FWDRAPDisplayObject("div");	
				parentScrubberDragMiddle_do.getStyle().background = "url('" + controller.mainScrubberDragMiddlePath_str + "') repeat-x";
			}
		
			parentScrubberDragMiddle_do.setHeight(controller.scrubbersHeight);
			parentScrubber_do.addChild(parentScrubberDragMiddle_do);
			

			// Setup a to b loop buttons
			FWDRAPTextButton.setPrototype();
			self.left_do = new FWDRAPTextButton(
				'A',
				 self.buttonTextNormalColor,
				 self.buttonTextSelectedColor,
				 self.buttonBackgroundNormalColor,
				 self.buttonBackgroundSelectedColor,
				 controller.data.handPath_str,
				 controller.data.grabPath_str
				 );
			parentScrubber_do.addChild(self.left_do);
			self.left_do.addListener(FWDRAPTextButton.MOUSE_DOWN, self.aDown);
			self.left_do.addListener(FWDRAPTextButton.MOUSE_UP, self.aUp);

			FWDRAPTextButton.setPrototype();
			self.right_do = new FWDRAPTextButton(
				'B',
				 self.buttonTextNormalColor,
				 self.buttonTextSelectedColor,
				 self.buttonBackgroundNormalColor,
				 self.buttonBackgroundSelectedColor,
				 controller.data.handPath_str,
				 controller.data.grabPath_str
				 );
			parentScrubber_do.addChild(self.right_do);
			self.right_do.addListener(FWDRAPTextButton.MOUSE_DOWN, self.bDown);
			self.right_do.addListener(FWDRAPTextButton.MOUSE_UP, self.bUp);
		}

		self.bDown = function(e){
			self.scrub = true
			var viewportMouseCoordinates = FWDRAPUtils.getViewportMouseCoordinates(e.e);	
			self.lastPresedX = viewportMouseCoordinates.screenX;
			self.leftXPositionOnPress = self.right_do.getX();
			if(self.isMobile_bl){
				window.addEventListener("touchmove", self.bMoveHandler);
			}else{
				window.addEventListener("mousemove", self.bMoveHandler);
			}
			FWDAnimation.to(self.rightText_do.screen, .8, {css:{color:self.timeTextColorSelected}, ease:Expo.easeOut});
			self.dispatchEvent(FWDRAPATB.START_TO_SCRUB);
		}

		self.bUp = function(e){
			self.scrub = false;
			if(self.isMobile_bl){
				window.removeEventListener("touchmove", self.bMoveHandler);
			}else{
				window.removeEventListener("mousemove", self.bMoveHandler);
			}
			FWDAnimation.to(self.rightText_do.screen, .8, {css:{color:self.timeTextColorNormal}, ease:Expo.easeOut});
			self.dispatchEvent(FWDRAPATB.STOP_TO_SCRUB);
		}

		self.bMoveHandler = function(e){
			if(e.preventDefault) e.preventDefault();
			var viewportMouseCoordinates = FWDRAPUtils.getViewportMouseCoordinates(e);	
			self.finalHandlerX = Math.round(self.leftXPositionOnPress + viewportMouseCoordinates.screenX - self.lastPresedX);
			if(self.finalHandlerX <= Math.round(self.left_do.x + self.left_do.getWidth() + 2)){
				self.finalHandlerX = Math.round(self.left_do.x + self.left_do.getWidth() + 2);
			}else if(self.finalHandlerX > parentScrubber_do.w - self.right_do.getWidth()){
				self.finalHandlerX = parentScrubber_do.w - self.right_do.getWidth();
			}
			self.right_do.setX(self.finalHandlerX);
			self.pb = self.right_do.x/(parentScrubber_do.w - self.right_do.getWidth());
			self.updateTime();
			self.resizeProgress();
		}

		self.aDown = function(e){
			self.scrub = true;
			var viewportMouseCoordinates = FWDRAPUtils.getViewportMouseCoordinates(e.e);	
			self.lastPresedX = viewportMouseCoordinates.screenX;
			self.leftXPositionOnPress = self.left_do.getX();
			if(self.isMobile_bl){
				window.addEventListener("touchmove", self.aMoveHandler);
			}else{
				window.addEventListener("mousemove", self.aMoveHandler);
			}
			FWDAnimation.to(self.leftText_do.screen, .8, {css:{color:self.timeTextColorSelected}, ease:Expo.easeOut});
			self.dispatchEvent(FWDRAPATB.START_TO_SCRUB);
		}

		self.aUp = function(e){
			self.scrub = false;
			if(self.isMobile_bl){
				window.removeEventListener("touchmove", self.aMoveHandler);
			}else{
				window.removeEventListener("mousemove", self.aMoveHandler);
			}
			FWDAnimation.to(self.leftText_do.screen, .8, {css:{color:self.timeTextColorNormal}, ease:Expo.easeOut});
			self.dispatchEvent(FWDRAPATB.STOP_TO_SCRUB);
		}

		self.aMoveHandler = function(e){
			if(e.preventDefault) e.preventDefault();
			var viewportMouseCoordinates = FWDRAPUtils.getViewportMouseCoordinates(e);	
			self.finalHandlerX = Math.round(self.leftXPositionOnPress + viewportMouseCoordinates.screenX - self.lastPresedX);
			if(self.finalHandlerX <= 0){
				self.finalHandlerX = 0;
			}else if(self.finalHandlerX > Math.round(self.right_do.x - self.left_do.getWidth() - 2)){
				self.finalHandlerX = Math.round(self.right_do.x - self.left_do.getWidth() - 2);
			}
			self.left_do.setX(self.finalHandlerX);
			self.pa = self.left_do.x/parentScrubber_do.w;
			self.updateTime();
			self.resizeProgress();
		}

		this.resizeMainScrubber = function(){
			self.scruberWidth = Math.min(600, self.stageWidth - 50);
			parentScrubberWidth = self.scruberWidth - controller.startSpaceBetweenButtons * 6 - self.leftText_do.getWidth() - self.rightText_do.getWidth();
			parentScrubber_do.setWidth(parentScrubberWidth);
			parentScrubber_do.setX(Math.round(self.stageWidth - parentScrubberWidth)/2);
			parentScrubber_do.setY(parseInt((controller.stageHeight - controller.scrubbersHeight)/2));
			parentScrubberBkMiddle_do.setWidth(parentScrubberWidth - controller.scrubbersBkLeftAndRightWidth * 2);
			parentScrubberBkrightText_do.setX(parentScrubberWidth - controller.scrubbersBkLeftAndRightWidth);
		}

		self.positionButtons = function(){
			self.left_do.setX(self.pa * parentScrubber_do.w);
			self.right_do.setX(self.pb * (parentScrubber_do.w - self.right_do.getWidth()));
		}

		self.resizeProgress = function(){
			parentScrubberDragMiddle_do.setX(self.left_do.x + self.left_do.getWidth() + 1);
			parentScrubberDragMiddle_do.setWidth(self.right_do.x - (self.left_do.x + self.left_do.getWidth() + 2));
		}

		//################################################//
		/* Hide and show */
		//################################################//
		this.show = function(animate){
			if(self.isShowed_bl) return;
			self.isShowed_bl = true;
			self.duration = parent.totalTimeInSeconds;

			parent.main_do.addChild(self);

			self.setupInitLabels();
			
			self.positionText();
			self.positionButtons();
			self.resizeProgress();
			self.resizeMainScrubber();
			setTimeout(function(){
				self.positionText();
				self.positionButtons();
				self.resizeProgress();
				self.resizeMainScrubber();
			}, 300);
			self.isShowed_bl = true;
			var offset = 0;
			if(controller.isMainScrubberOnTop_bl) offset += controller.mainScrubber_do.h - controller.mainScrubberOffestTop - 1;
			
			clearTimeout(self.hideCompleteId_to);
			clearTimeout(self.showCompleteId_to);
			self.mainHolder_do.setY(- self.stageHeight);
			
			if(animate){
				FWDAnimation.to(self.mainHolder_do, .8, {y:0, ease:Expo.easeInOut});
			}else{
				FWDAnimation.killTweensOf(self.mainHolder_do);
				self.mainHolder_do.setY(0);
			}
			setTimeout(self.positionButtons, 200);
			
		};

		this.hide = function(animate){
			if(!self.isShowed_bl) return;
			self.isShowed_bl = false;
			if(animate){
				FWDAnimation.to(self.mainHolder_do, .8, {y:-self.stageHeight, ease:Expo.easeInOut, onComplete:function(){
					parent.main_do.removeChild(self);
					self.dispatchEvent(FWDRAPATB.HIDE_COMPLETE);
				}});
			}else{
				FWDAnimation.killTweensOf(self.mainHolder_do);
				self.mainHolder_do.setY(-self.stageHeight);
			}
			setTimeout(self.positionButtons, 200);
		};

	
		
		self.init();
	};
	
	/* set prototype */
	FWDRAPATB.setPrototype = function(){
		FWDRAPATB.prototype = null;
		FWDRAPATB.prototype = new FWDRAPDisplayObject("div");
	};

	FWDRAPATB.START_TO_SCRUB = "startToScrub";
	FWDRAPATB.SCRUB = "scrub";
	FWDRAPATB.STOP_TO_SCRUB = "stopToScrub";
	FWDRAPATB.HIDE_COMPLETE = 'hideComplete';

	FWDRAPATB.prototype = null;
	window.FWDRAPATB = FWDRAPATB;
}(window));

/* FWDRAPTextButton */
(function (window){
var FWDRAPTextButton = function(
		label,
		colorN,
		colorS,
		bkColorN,
		bkColorS,
		cursor,
		cursor2
		){
		
		var self = this;
		var prototype = FWDRAPTextButton.prototype;
		
		this.nImg_img = null;
		this.sImg_img = null;
		
		this.dumy_do = null;
		this.cursor = cursor;
		this.cursor2 = cursor2;
	
		this.label_str = label;
		this.colorN_str = colorN;	
		this.colorS_str = colorS;
		this.bkColorN_str = bkColorN;
		this.bkColorS_str = bkColorS;
	
		this.isDisabled_bl = false;
		this.isMobile_bl = FWDRAPUtils.isMobile;
		
		//##########################################//
		/* initialize this */
		//##########################################//
		this.init = function(){
			self.setupMainContainers();
			
		};
		
		//##########################################//
		/* setup main containers */
		//##########################################//
		this.setupMainContainers = function(){
			
			self.hasTransform3d_bl = false;
			self.hasTransform2d_bl = false;
			self.setBackfaceVisibility();
			self.getStyle().display = "inline-block";
			self.getStyle().clear = "both";
			self.getStyle().fontFamily = "Arial";
			self.getStyle().fontSize= "12px";
			self.getStyle().whiteSpace= "nowrap";
			self.getStyle().padding = "3px 4px";
			self.getStyle().color = self.colorN_str;
			self.getStyle().backgroundColor = self.bkColorN_str;
			self.getStyle().fontSmoothing = "antialiased";
			self.getStyle().webkitFontSmoothing = "antialiased";
			self.getStyle().textRendering = "optimizeLegibility";	
			self.setInnerHTML(self.label_str);
			
			self.dumy_do = new FWDRAPDisplayObject("div");
			if(FWDRAPUtils.isIE){
				self.dumy_do.setBkColor("#00FF00");
				self.dumy_do.setAlpha(0.0001);
			}
			self.dumy_do.getStyle().cursor = 'grab';
			self.dumy_do.getStyle().width = "100%";
			self.dumy_do.getStyle().height = "50px";
			self.addChild(self.dumy_do);
			
			if(self.hasPointerEvent_bl){
				self.screen.addEventListener("pointerup", self.onMouseUp);
				self.screen.addEventListener("pointerover", self.onMouseOver);
				self.screen.addEventListener("pointerout", self.onMouseOut);
			}else if(self.screen.addEventListener){	
				if(!self.isMobile_bl){
					self.screen.addEventListener("mouseover", self.onMouseOver);
					self.screen.addEventListener("mouseout", self.onMouseOut);
					self.screen.addEventListener("mousedown", self.onMouseDown);
				}
				self.screen.addEventListener("touchstart", self.onMouseDown);
			}
		};
		
		this.onMouseOver = function(e){
			if(self.isDisabled_bl) return;
			self.setSelectedState();
		};
			
		this.onMouseOut = function(e){
			if(self.isDisabled_bl || self.grabed) return;
			self.setNormalState();
		};


		this.onMouseDown = function(e){
			if(self.isDisabled_bl) return;
		
			self.grabed = true;
			if(!self.isMobile_bl){
				window.addEventListener('mouseup', self.checkUp)
			}else{
				window.addEventListener('touchend', self.checkUp)
			}
			self.dumy_do.getStyle().cursor = 'grabbing';
			document.getElementsByTagName("body")[0].style.cursor = 'grabbing';

			self.dispatchEvent(FWDRAPTextButton.MOUSE_DOWN, {e:e});
		};

		this.checkUp = function(e){
			var vc = FWDRAPUtils.getViewportMouseCoordinates(e);	
			if(!FWDRAPUtils.hitTest(self.screen, vc.screenX, vc.screenY)){
				self.setNormalState();	
				if(!self.isMobile_bl){
					window.removeEventListener('mouseup', self.checkUp);
				}else{
					window.addEventListener('touchend', self.checkUp);
				}
			}
			self.grabed = false;
			self.dumy_do.getStyle().cursor = 'grab';
			document.getElementsByTagName("body")[0].style.cursor = 'auto';
			self.dispatchEvent(FWDRAPTextButton.MOUSE_UP);
		}

		//####################################//
		/* Set normal / selected state */
		//####################################//
		this.setNormalState = function(animate){
			FWDAnimation.to(self.screen, .8, {css:{color:self.colorN_str, backgroundColor:self.bkColorN_str}, ease:Expo.easeOut});
		};
		
		this.setSelectedState = function(animate){
			FWDAnimation.to(self.screen, .8, {css:{color:self.colorS_str, backgroundColor:self.bkColorS_str}, ease:Expo.easeOut});
		};

		this.disable = function(){
			this.onMouseOver();
			this.dumy_do.setButtonMode(false);
			FWDAnimation.to(self, .8, {alpha:.4, ease:Expo.easeOut});
			this.isDisabled_bl = true;
		}
		
		this.enable = function(){
			this.isDisabled_bl = false;
			this.onMouseOut();
			this.dumy_do.setButtonMode(true);
			FWDAnimation.to(self, .8, {alpha:1, ease:Expo.easeOut});
			
		}
		
	
		self.init();
	};
	
	/* set prototype */
	FWDRAPTextButton.setPrototype = function(){
		FWDRAPTextButton.prototype = null;
		FWDRAPTextButton.prototype = new FWDRAPDisplayObject("div");
	};
	
	FWDRAPTextButton.MOUSE_UP = 'mouseUp';
	FWDRAPTextButton.MOUSE_DOWN = 'mouseDown';

	
	FWDRAPTextButton.prototype = null;
	window.FWDRAPTextButton = FWDRAPTextButton;
}(window));