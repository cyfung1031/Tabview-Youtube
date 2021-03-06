-(function() {

  function inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  if (inIframe()) return;

  if (!$) return;

  /**
   * SVG resources:
   * <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
   */

  const scriptVersionForExternal = '2022/05/07';

  const isMyScriptInChromeRuntime = () => typeof((((window || 0).chrome || 0).runtime || 0).getURL) == 'function'

  const svgComments = `<path d="M40.068 13.465l-34.138.07A5.94 5.94 0 0 0 0 19.465v21.141a5.94 5.94 0 0 0 5.93 5.929H12v10a1 
  1 0 0 0 1.74.673l9.704-10.675 16.626-.068A5.94 5.94 0 0 0 46 40.536V19.395a5.94 5.94 0 0 0-5.932-5.93zM10 23.465h13a1 
  1 0 1 1 0 2H10a1 1 0 1 1 0-2zm26 14H10a1 1 0 1 1 0-2h26a1 1 0 1 1 0 2zm0-6H10a1 1 0 1 1 0-2h26a1 1 0 1 1 0 
  2zm18.072-28.93l-34.142-.07A5.94 5.94 0 0 0 14 8.395v3.124l26.064-.054c4.377 0 7.936 3.557 7.936 7.93v21.07.071 
  2.087l3.26 3.586a1 1 0 0 0 1.74-.673v-10h1.07A5.94 5.94 0 0 0 60 29.607V8.465a5.94 5.94 0 0 0-5.928-5.93z"/>`.trim();

  const svgVideos = `<path d="M298 33c0-13.255-10.745-24-24-24H24C10.745 9 0 19.745 0 33v232c0 13.255 10.745 24 24 
  24h250c13.255 0 24-10.745 24-24V33zM91 39h43v34H91V39zM61 259H30v-34h31v34zm0-186H30V39h31v34zm73 
  186H91v-34h43v34zm-11-82.292v-55.417c0-8.25 5.868-11.302 12.77-6.783l40.237 26.272c6.902 4.519 6.958 11.914.056 
  16.434l-40.321 26.277c-6.902 4.52-12.742 1.467-12.742-6.783zM207 259h-43v-34h43v34zm0-186h-43V39h43v34zm61 
  186h-31v-34h31v34zm0-186h-31V39h31v34z"/>`.trim();

  const svgInfo = `<path d="M11.812 0C5.289 0 0 5.289 0 11.812s5.289 11.813 11.812 11.813 11.813-5.29 11.813-11.813S18.335 
  0 11.812 0zm2.459 18.307c-.608.24-1.092.422-1.455.548s-.783.189-1.262.189c-.736 
  0-1.309-.18-1.717-.539s-.611-.814-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 
  .147-.759l.761-2.688c.067-.258.125-.503.171-.731a3.24 3.24 0 0 0 
  .068-.633c0-.342-.071-.582-.212-.717s-.412-.201-.813-.201c-.196 
  0-.398.029-.605.09s-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521s.885-.218 1.29-.218c.731 0 1.295.178 
  1.692.53s.594.812.594 1.376c0 .117-.014.323-.041.617a4.13 4.13 0 0 1-.152.811l-.757 
  2.68c-.062.215-.117.461-.167.736s-.073.485-.073.626c0 .356.079.599.239.728s.435.194.827.194a2.4 2.4 0 0 0 .626-.097 
  3.56 3.56 0 0 0 .506-.17l-.203.827zm-.134-10.878c-.353.328-.778.492-1.275.492s-.924-.164-1.28-.492a1.57 1.57 0 
  0 1-.533-1.193c0-.465.18-.865.533-1.196a1.81 1.81 0 0 1 1.28-.497 1.79 1.79 0 0 1 1.275.497c.353.331.53.731.53 
  1.196s-.177.865-.53 1.193z"/>`.trim();

  const svgPlayList = `<path d="M0 64h256v42.667H0zm0 85.333h256V192H0zm0 85.334h170.667v42.667H0zm341.333 
  0v-85.334h-42.666v85.334h-85.334v42.666h85.334v85.334h42.666v-85.334h85.334v-42.666z"/>`.trim();

  // --- Youtube Video Testing : 
  // Square Video: https://www.youtube.com/watch?v=L0RXVnRbFg8 
  // Square Video: https://www.youtube.com/watch?v=bK_rKhMIotU
  // ---


  const LAYOUT_TWO_COLUMNS = 1;
  const LAYOUT_THEATER = 2;
  const LAYOUT_FULLSCREEN = 4;
  const LAYOUT_CHATROOM = 8;
  const LAYOUT_CHATROOM_COLLASPED = 16;
  const LAYOUT_TAB_EXPANDED = 32;
  const LAYOUT_ENGAGEMENT_PANEL_EXPAND = 64;

  const mtoInterval1 = 40;
  const mtoInterval2 = 150;

  let lastVideoURL = null; // for less attribute set only



  const querySelectorFromAnchor = HTMLElement.prototype.querySelector;  // nodeType==1 // since 2022/07/12
  const querySelectorAllFromAnchor = HTMLElement.prototype.querySelectorAll; // nodeType==1 // since 2022/07/12
  const closestDOM = HTMLElement.prototype.closest;
  const elementRemove = HTMLElement.prototype.remove;
  const elementInsertBefore = HTMLElement.prototype.insertBefore; // since 2022/07/12
  const elementContains = HTMLElement.prototype.contains; // since 2022/07/12



  function scriptInjector(script_id, url_chrome, response_id){

    let res={
      script_id: script_id,
      inject: function(){

        let res = this, script_id = this.script_id;

        if(!document.querySelector(`script#${script_id}`)){
          if (res.runtime_url){
            addScriptByURL(res.runtime_url).id = script_id;
          } else {
            addScript(`${res.injection_script}`).id = script_id;
          }
        }

      }
    }
    res.script_id = script_id;
    
    if (isMyScriptInChromeRuntime()){
      res.runtime_url = window.chrome.runtime.getURL(url_chrome)
    } else {
      res.injection_script = GM_getResourceText(response_id);
    }

    return res;



  }

  const script_inject_facp = scriptInjector(
    'userscript-tabview-injection-facp',
    'js/injectionScript_fixAutoComplete.js',
    "injectionFixAutoComplete");
    
  const script_inject_js1 = scriptInjector(
    'userscript-tabview-injection-1',
    'js/injection_script_1.js',
    "injectionJS1");
    



  
  /** @type {WeakRef | null} */ 
  const WeakRef = window.WeakRef;
  const mWeakRef = WeakRef ? (o => o ? new WeakRef(o) : null) : (o => o || null);
  /** @type {(wr: Object | null) => Object | null} */
  const kRef = (wr => (wr && wr.deref) ? wr.deref() : wr);



  const nonCryptoRandStr_base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  function nonCryptoRandStr(/** @type {number} */ n){
    const result = new Array(n);
    const baseStr = nonCryptoRandStr_base;
    const bLen = baseStr.length;
    for ( let i = 0; i < n; i++ ) {
      let t = null
      do {
        t = baseStr.charAt(Math.floor(Math.random() * bLen));
      }while(i===0 && 10-t>0)
      result[i]=t;
   }
   return result.join('');
  }

/**
 * Class definition
 * @property {string} propName - propriety description
 * ...
 */
  class ObserverRegister{
    
    constructor(/** @type {()=>MutationObserver | IntersectionObserver} */ observerCreator){
      let uid = null;
      const uidStore = ObserverRegister.uidStore;
      do{
        uid = nonCryptoRandStr(5);
      }while(uidStore[uid])
      uidStore[uid] = true;
      
      /**
       * uid is the unique string for each observer
       * @type {string}
       * @public
       */
      this.uid = uid;
      
      /**
       * observerCreator is a function to create the observer
       * @type {Function}
       * @public
       */
      this.observerCreator = observerCreator
      
      /**
       * observer is the actual observer object
       * @type {MutationObserver | IntersectionObserver}
       * @public
       */
      this.observer = null;
    }
    bindElement(/** @type {HTMLElement} */ elm, ...args){
      if(elm.hasAttribute(`o3r-${this.uid}`))return false;
      elm.setAttribute(`o3r-${this.uid}`,'')
      if(this.observer===null){
        this.observer=this.observerCreator();
      }
      this.observer.observe(elm, ...args)
      return true
    }
    clear(/** @type {boolean} */ flag){
      if(this.observer !== null){
        //const uidStore = ObserverRegister.uidStore;
        if(flag === true){
          this.observer.takeRecords();
          this.observer.disconnect();
        }
        this.observer = null;
        for(const s of document.querySelectorAll(`[o3r-${this.uid}]`)) s.removeAttribute(`o3r-${this.uid}`)
        //uidStore[this.uid]=false;
        //this.uid = null;
      }
    }
  }

  /**
 * 'uidStore' is the static store of strings used.
 * @static
 */
  ObserverRegister.uidStore = {}; //backward compatible with FireFox 55.

  const mtoMutation_watchFlexy = new ObserverRegister(()=>{
    return new MutationObserver(FP.mtoNavF)
  });
  const sa_wflexy = mtoMutation_watchFlexy.uid;

  const mtoMutation_body = new ObserverRegister(()=>{
    return new MutationObserver(FP.mtoBodyF)
  });
  const sa_body = mtoMutation_body.uid;

  const mtoFlexyAttr = new ObserverRegister(()=>{
    return new MutationObserver(mtf_attrFlexy)
  });
  const sa_flexyAttr = mtoFlexyAttr.uid;

  const mtoVisibility_EngagementPanel = new ObserverRegister(()=>{
    return new MutationObserver(FP.mtf_attrEngagementPanel)
  });
  const sa_epanel = mtoVisibility_EngagementPanel.uid;

  const mtoVisibility_Playlist = new ObserverRegister(()=>{
    return new AttributeMutationObserver({
      "hidden": FP.mtf_attrPlaylist
    })
  })
  const sa_playlist = mtoVisibility_Playlist.uid;

  const mtoVisibility_Comments = new ObserverRegister(()=>{
    return new AttributeMutationObserver({
      "hidden": FP.mtf_attrComments
    })
  })
  const sa_comments = mtoVisibility_Comments.uid;


  const mtoVisibility_Chatroom = new ObserverRegister(()=>{
    return new AttributeMutationObserver({
      "collapsed": FP.mtf_attrChatroom
    })
  })
  const sa_chatroom = mtoVisibility_Chatroom.uid;





  function tracer(key, cmp) {
    if (cmp > 0) return tracer[key] === cmp;
    return (tracer[key] = Date.now());
  }

  function racer(key, f) {
    let now = Date.now();
    const kTime = `${key}$$1`
    let t = racer[kTime] || 0;

    if (now < t) {
      const kCount = `${key}$$2`;
      racer[kCount] = (racer[kCount] || 0) + 1;
      if (racer[kCount] === 1) {
        let g = f;
        requestAnimationFrame(() => {
          racer[kCount] = 0;
          g();
          g = null;
        })
      }
    } else {
      racer[kTime] = now + 16;
      f();
    }
  }

  class ScriptEF {
    constructor() {
      this._id = scriptEC;
    }
    isValid() {
      return this._id === scriptEC;
    }
  }

  class Timeout {

    set(f, d, repeatCount) {
      if (this.cid > 0) return;
      let sEF = new ScriptEF();
      if (repeatCount > 0) {

        let rc = repeatCount;
        const g = () => {
          this.cid = 0;
          if (!sEF.isValid()) return;
          let res = f();
          if (--rc <= 0) return;
          if (res === true) this.cid = timeline.setTimeout(g, d);
        }
        g();

      } else {

        const g = () => {
          this.cid = 0;
          if (!sEF.isValid()) return;
          if (f() === true) this.cid = timeline.setTimeout(g, d);
        }
        this.cid = timeline.setTimeout(g, d);
      }
    }

    clear() {
      if (this.cid > 0) timeline.clearTimeout(this.cid);
    }

    isEmpty() {
      return !this.cid
    }


  }

  class Mutex {

    constructor() {
      this.p = Promise.resolve()
    }

    lockWith(f) {

      this.p = this.p.then(() => {
        return new Promise(f)
      }).catch(console.warn)
    }

  }



  function prettyElm(/** @type {Element} */ elm) {
    if (!elm || !elm.nodeName) return null;
    const eId = elm.id || null;
    const eClsName = elm.className || null;
    return [elm.nodeName.toLowerCase(), typeof eId == 'string' ? "#" + eId : '', typeof eClsName == 'string' ? '.' + eClsName.replace(/\s+/g, '.') : ''].join('').trim();
  }

  function extractTextContent(/** @type {Node} */ elm) {
    return elm.textContent.replace(/\s+/g, '').replace(/[^\da-zA-Z\u4E00-\u9FFF\u00C0-\u00FF\u00C0-\u02AF\u1E00-\u1EFF\u0590-\u05FF\u0400-\u052F\u0E00-\u0E7F\u0600-\u06FF\u0750-\u077F\u1100-\u11FF\u3130-\u318F\uAC00-\uD7AF\u3040-\u30FF\u31F0-\u31FF]/g, '')
  }

  function addScript(/** @type {string} */ scriptText) {
    const scriptNode = document.createElement('script');
    scriptNode.type = 'text/javascript';
    scriptNode.textContent = scriptText;
    try {
      document.documentElement.appendChild(scriptNode);
    } catch (e) {
      console.log('addScript Error', e)
    }
    return scriptNode;
  }

  function addScriptByURL(/** @type {string} */ scriptURL) {
    const scriptNode = document.createElement('script');
    scriptNode.type = 'text/javascript';
    scriptNode.src = scriptURL;
    try {
      document.documentElement.appendChild(scriptNode);
    } catch (e) {
      console.log('addScriptByURL Error', e)
    }
    return scriptNode;
  }

  function addStyle(/** @type {string} */ styleText, /** @type {HTMLElement | Document} */ container) {
    const styleNode = document.createElement('style');
    //styleNode.type = 'text/css';
    styleNode.textContent = styleText;
    (container || document.documentElement).appendChild(styleNode);
    return styleNode;
  }


  const stopIframePropagation = function(/** @type {Event} */ evt){
    if(scriptEnable && evt && evt.target && evt.target.nodeName=='IFRAME'){
      evt.stopImmediatePropagation();
      evt.stopPropagation();
    }
  }
  document.addEventListener('mouseover', stopIframePropagation, true)
  document.addEventListener('mouseout', stopIframePropagation, true)
  document.addEventListener('mousedown', stopIframePropagation, true)
  document.addEventListener('mouseup', stopIframePropagation, true)
  document.addEventListener('keydown', stopIframePropagation, true)
  document.addEventListener('keyup', stopIframePropagation, true)
  document.addEventListener('mouseenter', stopIframePropagation, true)
  document.addEventListener('mouseleave', stopIframePropagation, true)



  function isDOMVisible(/** @type {HTMLElement} */ elem) {
    // jQuery version : https://github.com/jquery/jquery/blob/a684e6ba836f7c553968d7d026ed7941e1a612d8/src/css/hiddenVisibleSelectors.js
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  }

  function isNonEmptyString(s) {
    return typeof s == 'string' && s.length > 0;
  }


  async function nativeCall(/** @type {EventTarget} */ dom, /** @type {any[]} */ detail) {
    //console.log(1231)
    dom.dispatchEvent(new CustomEvent("userscript-call-dom", { detail: detail }))
    //console.log(1232)
  }

  async function nativeFunc(/** @type {EventTarget} */ dom, /** @type {string} */ property, /** @type {any} */ args) {
    dom.dispatchEvent(new CustomEvent("userscript-call-dom-func", { detail: { property, args } }))
  }

  // async function nativeValue(dom, property, args) {
  //   dom.dispatchEvent(new CustomEvent("userscript-call-dom-value", { detail: { property, args } }))
  // }
  // async function nativeFuncStacked(/** @type {string} */ selector, /** @type {string} */ property, /** @type {any} */ args){
  //   document.dispatchEvent(new CustomEvent("userscript-call-dom-func-stacked", { detail: { selector, property, args } }))
  // }
  // async function nativeValueStacked(selector, property, args){
  //   document.dispatchEvent(new CustomEvent("userscript-call-dom-value-stacked", { detail: { selector, property, args } }))
  // }
  // async function nativeConstStacked(selector, property, args){
  //   document.dispatchEvent(new CustomEvent("userscript-call-dom-const-stacked", { detail: { selector, property, args } }))
  // }


  function akAttr(/** @type {HTMLElement} */ cssElm, /** @type {String} */ attrName, /** @type {boolean} */ isNegative, /** @type {string | any} */ flag) {
    // isNegative => incomplete loading

    let u = parseInt(cssElm.getAttribute(attrName) || 0) || 0;
    let ak = Math.abs(u);

    if (ak > 100 && isNegative && u < 0) {

    } else if (ak > 100 && !isNegative && u > 0) {

    } else {
      if (ak <= 100) {
        ak = 101;
      } else {
        ak++;
        if (ak >= 800) ak = 101;
      }
      // 101, 102, ... 799, 101 
    }

    cssElm.setAttribute(attrName, `${ isNegative ? -ak : ak }${ flag || '' }`)
  }



  let timeout_resize_for_layout_change = new Timeout();

  function dispatchWindowResize(){
    // for youtube to detect layout resize for adjusting Player tools
    return window.dispatchEvent(new Event('resize'));
  }



  function layoutStatusChanged(/** @type {number} */ old_layoutStatus, /** @type {number} */ new_layoutStatus) {


    if (old_layoutStatus === new_layoutStatus) return;

    const cssElm = kRef(ytdFlexy);

    if (!cssElm) return;


    const new_isExpandedChat = !(new_layoutStatus & LAYOUT_CHATROOM_COLLASPED) && (new_layoutStatus & LAYOUT_CHATROOM)
    const new_isCollaspedChat = (new_layoutStatus & LAYOUT_CHATROOM_COLLASPED) && (new_layoutStatus & LAYOUT_CHATROOM)

    const new_isTwoColumns = !!(new_layoutStatus & LAYOUT_TWO_COLUMNS);
    const new_isTheater = !!(new_layoutStatus & LAYOUT_THEATER);
    const new_isTabExpanded = !!(new_layoutStatus & LAYOUT_TAB_EXPANDED);
    const new_isFullScreen = !!(new_layoutStatus & LAYOUT_FULLSCREEN);
    const new_isExpandEPanel = !!(new_layoutStatus & LAYOUT_ENGAGEMENT_PANEL_EXPAND);

    


    function showTabOrChat() {

      layoutStatusMutex.lockWith(unlock => {

        if (lastShowTab == '#chatroom') {

          if (new_isTabExpanded) switchTabActivity(null)
          if (!new_isExpandedChat) ytBtnExpandChat();

        } else if (lastShowTab && lastShowTab.indexOf('#engagement-panel-') == 0) {

          if (new_isTabExpanded) switchTabActivity(null)
          if (!new_isExpandEPanel) ytBtnOpenEngagementPanel(lastShowTab);

        } else {

          if (new_isExpandedChat) ytBtnCollapseChat()
          if (!new_isTabExpanded) {setToActiveTab();}

        }

        timeline.setTimeout(unlock, 40);

      })
    }

    function hideTabAndChat() {

      layoutStatusMutex.lockWith(unlock => {

        if (new_isTabExpanded) switchTabActivity(null)
        if (new_isExpandedChat) ytBtnCollapseChat()
        if (new_isExpandEPanel) ytBtnCloseEngagementPanels();


        timeline.setTimeout(unlock, 40);

      })

    }


    if (new_isExpandedChat || new_isTabExpanded || new_isExpandEPanel) {
      if (statusCollasped !== 1) statusCollasped = 1;
    } else {
      if (statusCollasped === 1) statusCollasped = 2;
    }

    let changes = 0;

    if (old_layoutStatus !== null) changes = old_layoutStatus ^ new_layoutStatus;

    let chat_collasped_changed = !!(changes & LAYOUT_CHATROOM_COLLASPED)
    let tab_expanded_changed = !!(changes & LAYOUT_TAB_EXPANDED)
    let theater_mode_changed = !!(changes & LAYOUT_THEATER)
    let column_mode_changed = !!(changes & LAYOUT_TWO_COLUMNS)
    let fullscreen_mode_changed = !!(changes & LAYOUT_FULLSCREEN)
    let epanel_expanded_changed = !!(changes & LAYOUT_ENGAGEMENT_PANEL_EXPAND)

    let tab_change = (tab_expanded_changed ? 1 : 0) | (chat_collasped_changed ? 2 : 0) | (epanel_expanded_changed ? 4 : 0);

    let isChatOrTabExpandTriggering = tab_change == 0 ? false : (
      (tab_expanded_changed && new_isTabExpanded) ||
      (chat_collasped_changed && new_isExpandedChat) ||
      (epanel_expanded_changed && new_isExpandEPanel)
    );

    let isChatOrTabCollaspeTriggering = tab_change == 0 ? false : (
      (tab_expanded_changed && !new_isTabExpanded) ||
      (chat_collasped_changed && new_isCollaspedChat) ||
      (epanel_expanded_changed && !new_isExpandEPanel)
    );



    let moreThanOneShown = (new_isTabExpanded + new_isExpandedChat + new_isExpandEPanel) > 1

    let requestVideoResize = false;

    if (fullscreen_mode_changed || new_isFullScreen) {

    } else if(new_isTwoColumns && !new_isTheater && !column_mode_changed && (tab_change==2 || tab_change==4) && !new_isTabExpanded && new_isExpandedChat && new_isExpandEPanel){

      if(epanel_expanded_changed){
        layoutStatusMutex.lockWith(unlock => {
          ytBtnCollapseChat();
          setTimeout(unlock,13)
        })
      }else if(chat_collasped_changed){
        layoutStatusMutex.lockWith(unlock => {
          ytBtnCloseEngagementPanels();
          setTimeout(unlock,13)
        })

      }

    } else if (tab_change == 0 && column_mode_changed && new_isTwoColumns && !new_isTheater && statusCollasped === 1 && moreThanOneShown) {

      showTabOrChat();
      requestVideoResize = true;

    } else if (tab_change == 2 && new_isExpandedChat && new_isTwoColumns && !new_isTheater && statusCollasped === 1 && new_isTabExpanded && !column_mode_changed) {

      switchTabActivity(null);
      requestVideoResize = true;

    } else if (isChatOrTabExpandTriggering && new_isTwoColumns && new_isTheater && statusCollasped === 1 && !theater_mode_changed && !column_mode_changed) {

      ytBtnCancelTheater();
      requestVideoResize = true;

    } else if (new_isTwoColumns && new_isTheater && statusCollasped === 1) {

      hideTabAndChat();
      requestVideoResize = true;

    } else if (isChatOrTabCollaspeTriggering && new_isTwoColumns && !new_isTheater && statusCollasped === 2 && !column_mode_changed) {

      ytBtnSetTheater();
      requestVideoResize = true;

    } else if (tab_change == 0 && (column_mode_changed || theater_mode_changed) && new_isTwoColumns && !new_isTheater && statusCollasped !== 1) {

      showTabOrChat();
      requestVideoResize = true;

    } else if (!new_isFullScreen && new_isTwoColumns && !new_isTheater && !new_isTabExpanded &&
      (new_isCollaspedChat || !new_isExpandedChat) &&
      !new_isExpandEPanel
    ) {
      // bug fix for restoring from mini player

      layoutStatusMutex.lockWith(unlock => {
        setToActiveTab();
        timeline.setTimeout(unlock, 40);
      })

      requestVideoResize = true;

    } else if (tab_expanded_changed) {

      requestVideoResize = true;

    }


    if (column_mode_changed && !chat_collasped_changed && new_isExpandedChat) {

      runAfterExpandChat();

    }



    if (requestVideoResize) {

      timeout_resize_for_layout_change.clear();
      timeout_resize_for_layout_change.set(() => {
        dispatchWindowResize();
      }, 92)

    } else if (timeout_resize_for_layout_change.isEmpty() && (Date.now()) - lastResizeAt > 600) {
      timeout_resize_for_layout_change.set(() => {
        if ((Date.now()) - lastResizeAt > 600) dispatchWindowResize();
      }, 62)
    }




  }



  const wls = new Proxy({
    /** @type {number | null} */
    layoutStatus:undefined
  }, {
    get: function(target, prop) {
      return target[prop];
    },
    set: function(target, prop, value) {
      if(prop=='layoutStatus'){
          
        if (value === null) {
          statusCollasped = 0;
          target[prop] = value;
          return;
        }else if(target[prop]===value){
          return;
        }else{
          if (!target.layoutStatus_pending) {
            target.layoutStatus_pending = true;
            const old_layoutStatus = target[prop];
            target[prop] = value;
            layoutStatusMutex.lockWith(unlock => {
              target.layoutStatus_pending = false;
              layoutStatusChanged(old_layoutStatus, target[prop]);
              timeline.setTimeout(unlock, 40)
            })
            return;
          }
        }
      }
      target[prop] = value;
    },
    has: function(target, prop) {
      return (prop in target);
    }
  });






  const svgElm = (w, h, vw, vh, p) => `<svg width="${w}" height="${h}" viewBox="0 0 ${vw} ${vh}" preserveAspectRatio="xMidYMid meet">${p}</svg>`

  let settings = {
    defaultTab: "#tab-videos"
  };


  let mtoInterval = mtoInterval1;

  function isVideoPlaying(video) {
    return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > video.HAVE_CURRENT_DATA;
  }

  function wAttr(elm, attr, kv) {
    if (!elm || kv === null) {} else if (kv === true) { elm.setAttribute(attr, '') } else if (kv === false) { elm.removeAttribute(attr) } else if (typeof kv == 'string') { elm.setAttribute(attr, kv) }
  }

  function hideTabBtn(tabBtn) {
    let isActiveBefore = tabBtn.classList.contains('active');
    tabBtn.classList.add("tab-btn-hidden");
    if (isActiveBefore) {
      setToActiveTab();
    }
  }

  function hasAttribute(obj, key) {
    return obj && obj.hasAttribute(key);
  }

  function isTheater() {
    const cssElm = kRef(ytdFlexy);
    return (cssElm && cssElm.hasAttribute('theater'))
  }

  function isFullScreen() {
    const cssElm = kRef(ytdFlexy);
    return (cssElm && cssElm.hasAttribute('fullscreen'))
  }

  function isChatExpand() {
    const cssElm = kRef(ytdFlexy);
    return cssElm && cssElm.hasAttribute('userscript-chatblock') && !cssElm.hasAttribute('userscript-chat-collapsed')
  }

  function isWideScreenWithTwoColumns() {
    const cssElm = kRef(ytdFlexy);
    return (cssElm && cssElm.hasAttribute('is-two-columns_'))
  }

  function isAnyActiveTab() {
    return $('#right-tabs .tab-btn.active').length > 0
  }

  function isEngagementPanelExpanded() { //note: not checking the visual elements
    const cssElm = kRef(ytdFlexy);
    return (cssElm && +cssElm.getAttribute('userscript-engagement-panel') > 0)
  }

  function engagement_panels_() {

    let res = [];
    let shownRes = [];

    let v = 0,
      k = 1,
      count = 0;
      
    for (const ePanel of document.querySelectorAll(
      `ytd-watch-flexy ytd-engagement-panel-section-list-renderer[o3r-${sa_epanel}]`
      )) {

      let visibility = ePanel.getAttribute('visibility') //ENGAGEMENT_PANEL_VISIBILITY_EXPANDED //ENGAGEMENT_PANEL_VISIBILITY_HIDDEN

      switch (visibility) {
        case 'ENGAGEMENT_PANEL_VISIBILITY_EXPANDED':
          v |= k;
          count++;
          shownRes.push(ePanel)
          res.push({ ePanel, k, visible: true });
          break;
        case 'ENGAGEMENT_PANEL_VISIBILITY_HIDDEN':
          res.push({ ePanel, k, visible: false });
          break;
        default:
          res.push({ ePanel, k, visible: false });
      }

      k = k << 1;

    }
    return { list: res, value: v, count: count, shownRes };
  }


  function ytBtnOpenEngagementPanel(/** @type {number | string} */ panel_id) {

    if (typeof panel_id == 'string') {
      panel_id = panel_id.replace('#engagement-panel-', '');
      panel_id = parseInt(panel_id);
    }
    if (panel_id >= 0) {} else return false;

    let panels = engagement_panels_();

    for (const { ePanel, k, visible } of panels.list) {
      if ((panel_id & k) === k) {
        if (!visible) ePanel.setAttribute('visibility', "ENGAGEMENT_PANEL_VISIBILITY_EXPANDED");
      } else {
        if (visible) ytBtnCloseEngagementPanel(ePanel);
      }
    }

  }

  function ytBtnCloseEngagementPanel(/** @type {HTMLElement} */  s) {
    //ePanel.setAttribute('visibility',"ENGAGEMENT_PANEL_VISIBILITY_HIDDEN");
    let btn = querySelectorFromAnchor.call(s,'ytd-watch-flexy ytd-engagement-panel-title-header-renderer #header > #visibility-button > ytd-button-renderer');
    if (btn) {
      btn.click();
    }
  }

  function ytBtnCloseEngagementPanels() {
    if (isEngagementPanelExpanded()) {
      for (const s of document.querySelectorAll(
        `ytd-watch-flexy ytd-engagement-panel-section-list-renderer[o3r-${sa_epanel}]`
        )) {
        if (s.getAttribute('visibility') == "ENGAGEMENT_PANEL_VISIBILITY_EXPANDED") ytBtnCloseEngagementPanel(s);
      }
    }
  }

  function ytBtnSetTheater() {
    if (!isTheater()) {
      const sizeBtn = document.querySelector('ytd-watch-flexy #ytd-player button.ytp-size-button')
      if (sizeBtn) sizeBtn.click();
    }
  }

  function ytBtnCancelTheater() {
    if (isTheater()) {
      const sizeBtn = document.querySelector('ytd-watch-flexy #ytd-player button.ytp-size-button')
      if (sizeBtn) sizeBtn.click();
    }
  }

  function ytBtnExpandChat() {
    let button = document.querySelector('ytd-live-chat-frame#chat[collapsed] > .ytd-live-chat-frame#show-hide-button')
    if (button) querySelectorFromAnchor.call(button,'ytd-toggle-button-renderer').click();
  }

  function ytBtnCollapseChat() {
    let button = document.querySelector('ytd-live-chat-frame#chat:not([collapsed]) > .ytd-live-chat-frame#show-hide-button')
    if (button) querySelectorFromAnchor.call(button, 'ytd-toggle-button-renderer').click();
  }


  const Q = {}



  function chatFrameContentDocument() {
    // non-null if iframe exist && contentDocument && readyState = complete
    /** @type {HTMLIFrameElement | null} */ 
    let iframe = document.querySelector('ytd-live-chat-frame iframe#chatframe');
    if (!iframe) return null; //iframe must be there
    /** @type {Document | null} */ 
    let cDoc = null;
    try {
      cDoc = iframe.contentDocument;
    } catch (e) {}
    if (!cDoc) return null;
    if (cDoc.readyState != 'complete') return null; //we must wait for its completion

    return cDoc;

  }

  function chatFrameElement(/** @type {string} */ cssSelector) {
    let cDoc = chatFrameContentDocument();
    if (!cDoc) return null;
    /** @type {HTMLElement | null} */ 
    let elm = null;
    try {
      elm = cDoc.querySelector(cssSelector)
    } catch (e) {
      console.log('iframe error', e)
    }
    return elm;
  }




  function fixTabs() {


    if (!scriptEnable) return;


    let queryElement = document.querySelector('*:not(#tab-videos) > #related:not([non-placeholder-videos]) > ytd-watch-next-secondary-results-renderer')

    let isRelocated = !!queryElement;



    if (isRelocated) {

      let relocatedRelated = closestDOM.call(queryElement, '#related'); // NOT NULL

      let right_tabs = document.querySelector('#right-tabs');
      let tab_videos = querySelectorFromAnchor.call(right_tabs,"#tab-videos");

      if (!right_tabs || !tab_videos) return;

      for (const s of querySelectorAllFromAnchor.call(relocatedRelated,'#related')) {
        s.setAttribute('non-placeholder-videos', '')
      }

      let target_container = document.querySelector('ytd-watch-flexy:not([is-two-columns_]) #primary-inner, ytd-watch-flexy[is-two-columns_] #secondary-inner')

      if (target_container) target_container.append(right_tabs) // last-child


      let videos_related = relocatedRelated; // NOT NULL
      $('[placeholder-videos]').removeAttr('placeholder-videos');
      $('[placeholder-for-youtube-play-next-queue]').removeAttr('placeholder-for-youtube-play-next-queue');

      tab_videos.appendChild(videos_related);
      let videos_results_renderer = querySelectorFromAnchor.call(relocatedRelated,"ytd-watch-next-secondary-results-renderer");
      if (videos_results_renderer) videos_results_renderer.setAttribute('data-dom-changed-by-tabview-youtube', scriptVersionForExternal);
      videos_related.setAttribute('placeholder-for-youtube-play-next-queue', '')
      videos_related.setAttribute('placeholder-videos', '')

      $('[placeholder-videos]').on("scroll", makeBodyScrollByEvt);




    }



    /** @type {HTMLElement | null} */ 
    let chatroom = null;
    if (chatroom = document.querySelector('*:not([data-positioner="before|#chat"]) + ytd-live-chat-frame#chat, ytd-live-chat-frame#chat:first-child')) {

      let positioner = document.querySelector('tabview-youtube-positioner[data-positioner="before|#chat"]');
      if (positioner) positioner.remove();


      if (document.querySelector('.YouTubeLiveFilledUpView')) {
        // no relocation
      } else {

        $(chatroom).insertBefore('#right-tabs')

      }


      $(positioner ? positioner : document.createElement('tabview-youtube-positioner')).attr('data-positioner', 'before|#chat').insertBefore(chatroom)



    }


  }

  function handlerAutoCompleteExist() {


    /** @type {HTMLElement} */ 
    let autoComplete = this;

    autoComplete.removeEventListener('autocomplete-sc-exist', handlerAutoCompleteExist, false)

    let domId = autoComplete.getAttribute('data-autocomplete-input-id')
    let searchBox = autoComplete.ownerDocument.querySelector(`[data-autocomplete-results-id="${domId}"]`)

    if (!domId || !searchBox) return;

    let positioner = searchBox.nextSibling;
    if (positioner && positioner.nodeName.toLowerCase() == "autocomplete-positioner") {} else if (positioner && positioner.nodeName.toLowerCase() != "autocomplete-positioner") {
      $(positioner = document.createElement("autocomplete-positioner")).insertAfter(searchBox);
    } else {
      $(positioner = document.createElement("autocomplete-positioner")).prependTo(searchBox.parentNode);
    }
    $(autoComplete).prependTo(positioner);

    positioner.style.setProperty('--sb-margin-bottom', getComputedStyle(searchBox).marginBottom)
    positioner.style.setProperty('--height', searchBox.offsetHeight + 'px')

  }

  function mtf_fixAutoCompletePosition(/** @type {HTMLElement} */ elmAutoComplete) {


    elmAutoComplete.setAttribute('autocomplete-disable-updatesc', '')
    elmAutoComplete.addEventListener('autocomplete-sc-exist', handlerAutoCompleteExist, false)

    script_inject_facp.inject();

  }

  function mtf_AfterFixTabs() {


    /** @type {HTMLElement | null} */ 
    let ytdFlexyElm = kRef(ytdFlexy);
    if (!scriptEnable || !ytdFlexyElm) return;

    /** @type {HTMLElement | null} */
    const rootElement = Q.mutationTarget || ytdFlexyElm;



    const autocomplete = querySelectorFromAnchor.call(rootElement,'[placeholder-for-youtube-play-next-queue] input#suggestions-search + autocomplete-positioner > .autocomplete-suggestions[data-autocomplete-input-id]:not([position-fixed-by-tabview-youtube])')

    if (autocomplete) {

      const searchBox = document.querySelector('[placeholder-for-youtube-play-next-queue] input#suggestions-search')


      if (searchBox) {


        autocomplete.parentNode.setAttribute('position-fixed-by-tabview-youtube', '');
        autocomplete.setAttribute('position-fixed-by-tabview-youtube', '');
        autocomplete.setAttribute('userscript-scrollbar-render', '')

        if (!searchBox.hasAttribute('is-set-click-to-toggle')) {
          searchBox.setAttribute('is-set-click-to-toggle', '')
          searchBox.addEventListener('click', function() {


            setTimeout(() => {
              const autocomplete = document.querySelector(`.autocomplete-suggestions[data-autocomplete-input-id="${ this.getAttribute('data-autocomplete-results-id') }"]`)

              if (!autocomplete) return;

              const isNotEmpty = (autocomplete.textContent || '').length > 0 && (this.value || '').length > 0;

              if (isNotEmpty) {

                let elmVisible = isDOMVisible(autocomplete)

                if (elmVisible) $(autocomplete).hide();
                else $(autocomplete).show();

              }

            }, 20);

          })

          let timeoutOnce_searchbox_keyup = new Timeout();
          searchBox.addEventListener('keyup', function() {

            timeoutOnce_searchbox_keyup.set(() => {

              const autocomplete = document.querySelector(`.autocomplete-suggestions[data-autocomplete-input-id="${ this.getAttribute('data-autocomplete-results-id') }"]`)

              if (!autocomplete) return;


              const isNotEmpty = (autocomplete.textContent || '').length > 0 && (this.value || '').length > 0

              if (isNotEmpty) {

                let elmVisible = isDOMVisible(autocomplete)

                if (!elmVisible) $(autocomplete).show();

              }

            }, 20);

          })

        }



      }

    }




    let currentLastVideo = querySelectorFromAnchor.call(rootElement,'[placeholder-videos] #items ytd-compact-video-renderer:last-of-type')
    let prevLastVideo = kRef(_cachedLastVideo);

    if (prevLastVideo !== currentLastVideo && currentLastVideo) {
      _cachedLastVideo = mWeakRef(currentLastVideo);
    }

    if (prevLastVideo !== currentLastVideo && currentLastVideo && prevLastVideo) {

      let isPrevRemoved = !prevLastVideo.parentNode


      function getVideoListHash() {

        let res = [...document.querySelectorAll('[placeholder-videos] #items ytd-compact-video-renderer')].map(renderer => {
          return querySelectorFromAnchor.call(renderer,'a[href*="watch"][href*="v="]').getAttribute('href')

        }).join('|')
        // /watch?v=XXXXX|/watch?v=XXXXXX|/watch?v=XXXXXX

        // alternative - DOM.data.videoId
        // let elms = document.querySelectorAll('[placeholder-videos] #items ytd-compact-video-renderer')
        // let res = [...elms].map(elm=>elm.data.videoId||'').join('|') ;

        if (res.indexOf('||') >= 0) {
          res = '';
        }

        return res ? res : null;
      }

      if (isPrevRemoved) {

        // this is the replacement of videos instead of addition

        const searchBox = document.querySelector('[placeholder-for-youtube-play-next-queue] input#suggestions-search')

        let currentPlayListHash = getVideoListHash() || null;

        if (!currentPlayListHash) {

        } else if (!videoListBeforeSearch && searchBox) {

          videoListBeforeSearch = currentPlayListHash;
          if (videoListBeforeSearch) {
            //console.log('fromSearch', videoListBeforeSearch)

            requestAnimationFrame(function() {

              let renderer = document.querySelector('[placeholder-videos] ytd-watch-next-secondary-results-renderer');
              if (searchBox && searchBox.parentNode) searchBox.blur();

              if (renderer) {
                let scrollParent = renderer.parentNode;
                if (scrollParent.scrollHeight > scrollParent.offsetHeight) {
                  let targetTop = renderer.offsetTop;
                  if (searchBox && searchBox.parentNode == scrollParent) targetTop -= searchBox.offsetHeight
                  scrollParent.scrollTop = targetTop - scrollParent.firstChild.offsetTop;
                }
              }

            });

          }

        } else if (videoListBeforeSearch) {

          if (currentPlayListHash != videoListBeforeSearch) {

            videoListBeforeSearch = null;
            //console.log('fromSearch', videoListBeforeSearch)


          }

        }


      }


    }




  }

  function base_ChatExist() {

    let ytdFlexyElm = kRef(ytdFlexy);
    if (!scriptEnable || !ytdFlexyElm) return null;

    // no mutation triggering if the changes are inside the iframe 

    // 1) Detection of #continuations inside iframe
    // iframe ownerDocument is accessible due to same origin
    // if the chatroom is collasped, no determination of live chat or replay (as no #continuations and somehow a blank iframe doc)

    // 2) Detection of meta tag
    // This is fastest but not reliable. It is somehow a bug that the navigation might not update the meta tag content

    // 3) Detection of HTMLElement inside video player for live video

    // (1)+(3) = solution

    let attr_chatblock = null
    let attr_chatcollapsed = null;

    const elmChat = document.querySelector('ytd-live-chat-frame#chat')
    let elmCont = null;
    if (elmChat) {
      elmCont = chatFrameElement('yt-live-chat-renderer #continuations')


      let s = 0;
      if (elmCont) {
        //not found if it is collasped.
        s |= querySelectorFromAnchor.call(elmCont,'yt-timed-continuation') ? 1 : 0;
        s |= querySelectorFromAnchor.call(elmCont,'yt-live-chat-replay-continuation, yt-player-seek-continuation') ? 2 : 0;
        //s |= elmCont.querySelector('yt-live-chat-restricted-participation-renderer')?4:0;
        if (s == 1) {
          attr_chatblock = 'chat-live';
        }else if (s == 2) attr_chatblock = 'chat-playback';

        if (s == 1) $("span#tab3-txt-loader").text('');

      } else if (!ytdFlexyElm.hasAttribute('userscript-chatblock')) {
        // live chat frame but type not known
          
        attr_chatblock = '';

      }
      //keep unknown as original    
      
      
      let isCollapsed = !!elmChat.hasAttribute('collapsed');
      attr_chatcollapsed = isCollapsed;

    } else {
      attr_chatblock = false;
      attr_chatcollapsed = false;

    }

    return { attr_chatblock, attr_chatcollapsed }

  }


  function mtf_ChatExist() {

    let ytdFlexyElm = kRef(ytdFlexy);
    if (!scriptEnable || !ytdFlexyElm) return;

    if (deferredVarYTDHidden) return;

    const elmChat = document.querySelector('ytd-live-chat-frame#chat')
    let elmCont = null;
    if (elmChat) {
      elmCont = chatFrameElement('yt-live-chat-renderer #continuations')
    }

    const chatBlockR = (elmChat ? 1 : 0) + (elmCont ? 2 : 0)
    if (Q.mtf_chatBlockQ !== chatBlockR) {
      Q.mtf_chatBlockQ = chatBlockR
      let rChatExist = base_ChatExist();
      //console.log(2446, rChatExist)
      if (rChatExist) {
        let { attr_chatblock, attr_chatcollapsed } = rChatExist;
        wAttr(ytdFlexyElm, 'userscript-chatblock', attr_chatblock)
        wAttr(ytdFlexyElm, 'userscript-chat-collapsed', attr_chatcollapsed)
        
        if(attr_chatblock=='chat-live') {
          
          _disableComments();
        }
      }
    }

  }




  let lastScrollAt1 = 0;

  function makeBodyScrollByEvt() {
    let ct = Date.now();
    if (ct - lastScrollAt1 < 6) return; // avoid duplicate calling
    lastScrollAt1 = ct;
    window.dispatchEvent(new Event("scroll")); // dispatch Scroll Event to Window for content display
  }

  let lastScrollAt2 = 0;

  function makeBodyScroll() {
    let ct = Date.now();
    if (ct - lastScrollAt2 < 30) return; // avoid over triggering
    lastScrollAt2 = ct;
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event("scroll")); // ask youtube to display content
    })
  }

  //let requestingComments = null
  //let scrollForComments_lastStart = 0;
   /*
  function scrollForComments_TF() {
 
    let comments = requestingComments;
    if (!comments) return;
    if (comments.hasAttribute('hidden')) {
      window.dispatchEvent(new Event("scroll"));
    } else requestingComments = null;

  }
  function scrollForComments() {
    scrollForComments_TF();
    if (!requestingComments) return;
    requestAnimationFrame(scrollForComments_TF);
    let ct = Date.now();
    if (ct - scrollForComments_lastStart < 60) return;
    scrollForComments_lastStart = ct;
    timeline.setTimeout(scrollForComments_TF, 80);
    timeline.setTimeout(scrollForComments_TF, 240);
    timeline.setTimeout(scrollForComments_TF, 870);
  
  }
  */



  const mtoCs = { mtoNav: null, mtoBody: null };


  const mtoVs = {}

  const mutation_target_id_list = ['ytp-caption-window-container', 'items', 'button', 'movie_player', 'player-ads', 'hover-overlays', 'replies'];
  const mutation_target_class_list = ['ytp-panel-menu', 'ytp-endscreen-content'];

  function isMtoOverallSkip(dTarget) {

    if (!dTarget || dTarget.nodeType !== 1) return true;

    if (mutation_target_id_list.includes(dTarget.id)) return true;

    for (const c of dTarget.classList) {
      if (mutation_target_class_list.includes(c)) return true;
    }

    return false;
  }


  const mutation_div_id_ignorelist = [
        'metadata-line',
        'ytp-caption-window-container',
        'top-level-buttons-computed',
        'microformat',
        'visibility-button',
        'info-strings',
        'action-menu',
        'reply-button-end'
    ];

  const mutation_div_class_ignorelist = [
        'badge', 'tp-yt-paper-tooltip', 'ytp-autonav-endscreen-upnext-header',
        'ytp-bound-time-left', 'ytp-bound-time-right', 'ytp-share-icon',
        'ytp-tooltip-title', 'annotation', 'ytp-copylink-icon', 'ytd-thumbnail',
        'paper-ripple',
        //caption
        'captions-text', 'caption-visual-line', 'ytp-caption-segment', 'ytp-caption-window-container',
        //menu
        'ytp-playlist-menu-button-text',

        'ytp-bezel-icon', 'ytp-bezel-text',
        'dropdown-content',
        'tp-yt-paper-menu-button', 'tp-yt-iron-dropdown',

        'ytd-metadata-row-renderer', // #content.ytd-metadata-row-renderer inside each of ytd-metadata-row-renderer (ytd-expander)
        'ytd-engagement-panel-section-list-renderer', // {div#content.style-scope.ytd-engagement-panel-section-list-renderer} inside each of ytd-engagement-panel-section-list-renderer

        'autocomplete-suggestions' // autocomplete-suggestions
    ];

  const mutation_target_tag_ignorelist = [
        'ytd-channel-name', 'tp-yt-iron-dropdown', 'tp-yt-paper-tooltip',
        'tp-yt-paper-listbox', 'yt-img-shadow', 'ytd-thumbnail', 'ytd-video-meta-block',

        'yt-icon-button', 'tp-yt-paper-button', 'yt-formatted-string', 'yt-icon', 'button', 'paper-ripple',

        'ytd-player-microformat-renderer',
        'ytd-engagement-panel-section-list-renderer', 'ytd-engagement-panel-title-header-renderer',
        'ytd-comment-renderer', 'ytd-menu-renderer', 'ytd-badge-supported-renderer',
        'ytd-subscribe-button-renderer', 'ytd-subscription-notification-toggle-button-renderer',
        'ytd-button-renderer', 'ytd-toggle-button-renderer',
        'yt-pdg-comment-chip-renderer', 'ytd-comment-action-buttons-renderer', 'ytd-comment-thread-renderer',
        'ytd-compact-radio-renderer', 'ytd-compact-video-renderer',
        'ytd-video-owner-renderer',
        'ytd-metadata-row-renderer', //ytd-metadata-row-renderer is part of the #collapsible inside ytd-expander

        'ytd-moving-thumbnail-renderer',
        'ytd-thumbnail-overlay-toggle-button-renderer',
        'ytd-thumbnail-overlay-bottom-panel-renderer', 'ytd-thumbnail-overlay-equalizer',
        'ytd-thumbnail-overlay-now-playing-renderer', 'ytd-thumbnail-overlay-resume-playback-renderer',
        'ytd-thumbnail-overlay-side-panel-renderer', 'ytd-thumbnail-overlay-time-status-renderer',
        'ytd-thumbnail-overlay-hover-text-renderer',

        'yt-interaction',
        'tp-yt-paper-spinner-lite', 'tp-yt-paper-spinner',

        'h1', 'h2', 'h3', 'h4', 'h5', 'span', 'a',

        'meta', 'br', 'script', 'style', 'link', 'dom-module', 'template'
    ];

  function isMtoTargetSkip(mutation) {
    //skip not important mutation tartget

    if (!mutation) return true;
    let { type, target } = mutation

    if (!target || target.nodeType !== 1 || type != 'childList') return true;

    let tagName = target.nodeName.toLowerCase();

    if (mutation_target_tag_ignorelist.includes(tagName)) return true;

    switch (tagName) {


      case 'ytd-expander':
        if (target.id == 'expander' && Q.comments_section_loaded == 1 && target.classList.contains('ytd-comment-renderer')) return true; // load comments
        return false;

      case 'div':

        if (target.id == 'contents') {
          return false;
        }
        if (mutation_div_id_ignorelist.includes(target.id)) return true;

        for (const c of target.classList) {
          if (mutation_div_class_ignorelist.includes(c)) return true;
        }

        return false;

    }

    return false;

  }


  function mtf_forceCheckLiveVideo() {
    // once per $$player-playback-timestamp$$ {#ytd-player .ytp-time-display} &&  $$chat-frame$$ {ytd-live-chat-frame#chat} detection
    // reset after popstatechange / videochange

    if(mtf_forceCheckLiveVideo_disable) return ;

    let ytdFlexyElm = kRef(ytdFlexy);
    if (!scriptEnable || !ytdFlexyElm) return ;

    const playerLabel = document.querySelector('ytd-watch-flexy:not([hidden]) #ytd-player .ytp-time-display') && document.querySelector('ytd-watch-flexy:not([hidden]) ytd-live-chat-frame#chat')
    if (!playerLabel) return ;
    mtf_forceCheckLiveVideo_disable = 1;
    timeline.setTimeout(FP.fireOnce_forceCheckLiveVideo_tf, 170)
    return ;
  }

  // continuous check for element relocation
  function mtf_append_comments() {
    
    /** @type {HTMLElement | null} */
    let ytdFlexyElm = kRef(ytdFlexy);
    if (!scriptEnable || !ytdFlexyElm) return;

    /** @type {HTMLElement | null} */
    const rootElement = Q.mutationTarget || ytdFlexyElm;

    let comments = querySelectorFromAnchor.call(rootElement,'#primary ytd-watch-metadata ~ ytd-comments#comments');
    if (comments) $(comments).appendTo('#tab-comments').attr('data-dom-changed-by-tabview-youtube', scriptVersionForExternal)
  }

  // continuous check for element relocation
  function mtf_liveChatBtnF() {
    
    /** @type {HTMLElement | null} */
    let ytdFlexyElm = kRef(ytdFlexy);
    if (!scriptEnable || !ytdFlexyElm) return;

    /** @type {HTMLElement | null} */
    const rootElement = Q.mutationTarget || ytdFlexyElm;

    let button = querySelectorFromAnchor.call(rootElement,'ytd-live-chat-frame#chat > .ytd-live-chat-frame#show-hide-button:nth-child(n+2)');
    if (button){
      let parentNode = closestDOM.call(button, 'ytd-live-chat-frame#chat');
      if (!parentNode){
        console.log('parentNode failed')
      } else if( HTMLElement.prototype.prepend ){
        // using prepend
        HTMLElement.prototype.prepend.call(parentNode, button)

      } else{
        // using insertBefore
        try{
          elementInsertBefore.call(parentNode, button, parentNode.firstChild);
        }catch(e){
          console.log('element insert failed in old browser CE')
        }
      }
    } 
    //if (button) button.parentNode.insertBefore(button, button.parentNode.firstChild)
  }



  // continuous check for element relocation
  // fired at begining & window resize, etc
  function mtf_append_playlist() {

    /** @type {HTMLElement | null} */
    let ytdFlexyElm = kRef(ytdFlexy);
    if (!scriptEnable || !ytdFlexyElm) return;

    /** @type {HTMLElement | null} */
    const rootElement = Q.mutationTarget || ytdFlexyElm;

    let ple1 = querySelectorFromAnchor.call(rootElement,"*:not(#ytd-userscript-playlist) > ytd-playlist-panel-renderer#playlist");
    if (ple1) {
      let ct = Date.now();
      let truePlaylist = null;
      let truePlaylist_items = document.querySelector('ytd-playlist-panel-renderer#playlist #items:not(:empty)');
      if (truePlaylist_items) {

        let truePlaylist = closestDOM.call(truePlaylist_items, '#playlist');
        if(!truePlaylist || truePlaylist.nodeType!==1) truePlaylist = null;
        else {
          truePlaylist.setAttribute('tabview-true-playlist', ct)
        }

      }

      if (!truePlaylist) truePlaylist = ple1; // NOT NULL

      for (const s of document.querySelectorAll(`*:not(#ytd-userscript-playlist) > ytd-playlist-panel-renderer#playlist:not([tabview-true-playlist="${ct}"])`)){
        elementRemove.call(s);
      }
        

      let $wrapper = getWrapper('ytd-userscript-playlist')
      $wrapper.append(truePlaylist).appendTo(document.querySelector("#tab-list"));
      truePlaylist.setAttribute('data-dom-changed-by-tabview-youtube', scriptVersionForExternal)
      setDisplayedPlaylist(); // relocation after re-layout

      requestAnimationFrame(() => {
        let ytdFlexyElm = kRef(ytdFlexy);
        if (!scriptEnable || !ytdFlexyElm) return;
        if (!switchTabActivity_lastTab && (ytdFlexyElm.getAttribute('tabview-selection') + '').indexOf('#tab-') === 0 && /https\:\/\/www\.youtube\.com\/watch.*[\?\&]list=[\w\-\_]+/.test(location.href)) {
          if (setToActiveTab('#tab-list')) switchTabActivity_lastTab = '#tab-list';
        }
      })

    }
  }


  // content fix - info & playlist
  // fired at begining, and keep for in case any change
  function mtf_fix_details() {

    if (!scriptEnable) return;

    let date_now = Date.now()

    if(no_fix_contents_until<date_now){

      let contentToggleBtn = document.querySelector('ytd-watch-flexy #tab-info ytd-expander tp-yt-paper-button#less.ytd-expander:not([hidden]), #tab-info ytd-expander tp-yt-paper-button#more.ytd-expander:not([hidden])')

      if(contentToggleBtn){
  
        no_fix_contents_until = date_now + 39;
        timeline.setTimeout(function() {
          const domElement = contentToggleBtn;
          contentToggleBtn = null;
          // if(!domElement.parentElement) return; // not working in pseudo custom element - parentNode = documentFragment
          const expander = closestDOM.call(domElement, 'ytd-watch-flexy #tab-info ytd-expander')
  
          if(!expander || expander.nodeType!==1) return; // checking whether it is still on the page
          if(expander.style.getPropertyValue('--ytd-expander-collapsed-height')){
            expander.style.setProperty('--ytd-expander-collapsed-height','')
          }
          nativeCall(expander, [
            {'property':'canToggleJobId','value':1}, // false disable calculateCanCollapse in childrenChanged
            {'property':'alwaysToggleable','value':false}, // this is checked in childrenChanged
            {'property':'recomputeOnResize','value':false}, // no need to check toggleable
            {'property':'isToggled','value':true}, // show full content
            {'property':'canToggle','value':false}, // hide show more or less btn
            {'property':'collapsedHeight','value':999999} // disable collapsed height check
          ])
  
        }, 40);
      }

    }


    if(no_fix_playlist_until<date_now){


      // just in case the playlist is collapsed
      let playlist = document.querySelector('#tab-list ytd-playlist-panel-renderer#playlist')
      if(playlist.matches('[collapsed], [collapsible]')) {
        no_fix_playlist_until=  date_now + 39;
        timeline.setTimeout(function() {
          const domElement = playlist;
          playlist = null;
          // if(!domElement.parentElement || domElement.nodeType!==1) return; // not working in pseudo custom element - parentNode = documentFragment
          const tablist = closestDOM.call(domElement, 'ytd-watch-flexy #tab-list')
  
          if(!tablist || tablist.nodeType!==1) return; // checking whether it is still on the page

          if (domElement.hasAttribute('collapsed')) wAttr(domElement, 'collapsed', false);
          if (domElement.hasAttribute('collapsible')) wAttr(domElement, 'collapsible', false);
        }, 40)
      }


    }


  }



  function isNullComments() {

    let comments = document.querySelector('ytd-comments#comments')
    if (!comments || comments.hasAttribute('hidden')) return true;

  }

  function _innerCommentsLoader( /** @type {HTMLElement} */ rootElement) {

    /** @type {HTMLElement | null} */
    let ytdFlexyElm = kRef(ytdFlexy);
    if (!scriptEnable || !ytdFlexyElm) return;
    
    if (deferredVarYTDHidden) return;


    let messageElm, messageStr, commentRenderer;
    let diffCSS = `[tabview-cache-time="${sect_hTime}"]`

    //console.log(823100,rootElement)

    if (commentRenderer = querySelectorFromAnchor.call(rootElement,`ytd-comments#comments #count.ytd-comments-header-renderer:not(${diffCSS})`)) {

      scheduledCommentRefresh=false;
      let eTime = Date.now();

      sect_holder = mWeakRef(commentRenderer);
      sect_hText = commentRenderer.textContent;
      sect_hTime = eTime;
      commentRenderer.setAttribute('tabview-cache-time', eTime);

      return {
        status: 1,
        f: () => {

          let span = document.querySelector("span#tab3-txt-loader")
          let r = '0';
          let txt = commentRenderer.textContent
          if (typeof txt == 'string') {
            let m = txt.match(/[\d\,\s]+/)
            if (m) {
              r = m[0].trim()


            }
          }
          
          if (span){

            let tab_btn = closestDOM.call(span,'.tab-btn[userscript-tab-content="#tab-comments"]')
            if(tab_btn)tab_btn.setAttribute('loaded-comment','normal')
            span.textContent = r;
          } 
          //console.log(754)
          mtoInterval = mtoInterval2;
          scheduledCommentRefresh=false;
          setCommentSection(1);
          comments_section_loaded_elm = mWeakRef(document.querySelector('ytd-comments#comments div#contents'))
        }
      }

    } else if ((messageElm = querySelectorFromAnchor.call(rootElement,`ytd-item-section-renderer#sections #header ~ #contents > ytd-message-renderer:not(${diffCSS})`)) && (messageStr = (messageElm.textContent || '').trim())) { //ytd-message-renderer
      // it is possible to get the message before the header generation.
      // sample link - https://www.youtube.com/watch?v=PVUZ8Nvr1ic
      // sample link - https://www.youtube.com/watch?v=yz8AiQc1Bk8

      scheduledCommentRefresh=false;
      let eTime = Date.now();

      sect_holder = mWeakRef(messageElm);
      sect_hText = messageElm.textContent;
      sect_hTime = eTime;
      messageElm.setAttribute('tabview-cache-time', eTime);

      return {
        status: 2,
        f: () => {
          timeline.setTimeout(function() {
            let span = document.querySelector("span#tab3-txt-loader")
            const mainMsg = querySelectorFromAnchor.call(messageElm,'#message, #submessage')
            if (mainMsg && mainMsg.textContent) {
              for (const msg of querySelectorAllFromAnchor.call(mainMsg,'*:not(:empty)')) {
                if (msg.childElementCount === 0 && msg.textContent) {
                  messageStr = msg.textContent.trim()
                  break
                }
              }
            }
            if (span){
              let tab_btn = closestDOM.call(span,'.tab-btn[userscript-tab-content="#tab-comments"]')
              if(tab_btn)tab_btn.setAttribute('loaded-comment','message')
              span.textContent ='\u200B';
            } 
            mtoInterval = mtoInterval2;
            scheduledCommentRefresh=false;
            setCommentSection(1);
            comments_section_loaded_elm = mWeakRef(document.querySelector('ytd-comments#comments div#contents'))
          }, 40);
        }
      }

    }

  }

  const atChange = async ()=>{

    // call when video change / popstate change / switch back from mini-view

    let ytdFlexyElm = kRef(ytdFlexy);
    if(!ytdFlexyElm) return;

    mtf_forceCheckLiveVideo_disable = 0; 
    mtf_forceCheckLiveVideo();

    if(Q.comments_section_loaded===0 && mtf_forceCheckLiveVideo_disable !== 2){

      const tabBtn = document.querySelector('[userscript-tab-content="#tab-comments"].tab-btn-hidden')
      if(tabBtn) {
        tabBtn.classList.remove("tab-btn-hidden") //if contains
      }

    }
  }

  let cld_comments_nothingFound=0;
  let time_preventImmHidden = 0;


  function hookSection(){


    //console.log(3300)

    let ytdFlexyElm = kRef(ytdFlexy);
    if (!scriptEnable || !ytdFlexyElm) return ;

    const comments = querySelectorFromAnchor.call(ytdFlexyElm,'ytd-comments#comments')
    if (!comments) return ;

    if(deferredVarYTDHidden) return;

    //console.log(3310)

    //new MutationObserver(function(){console.log(comments.querySelectorAll('*').length)}).observe(comments,{ attributes: true, childList: true, subtree: true })
    

    function foundSection(sections){

      
      //console.log(3320)

      function ulfx() {
        //console.log(1220)

        
        mtc_nr_comments=Math.max(mtc_nr_comments, Date.now()+1470)
        //console.log(7051)
        
        time_preventImmHidden = Date.now()+800;

        const rootElement = comments.parentNode


        if (pendingOne && querySelectorAllFromAnchor.call(comments,'[tabview-cache-time]').length > 1) return;
        pendingOne = false;
        if(!rootElement) return; //prevent unknown condition
        

        timeline.clearTimeout(cld_comments_nothingFound);
        cld_comments_nothingFound=0;

        let innerCommentsLoaderRet = _innerCommentsLoader(rootElement);

        //console.log(1222,_innerCommentsLoader)

        //console.log(702, innerCommentsLoaderRet, rootElement, sect_holder, kRef(sect_holder))

        if (!innerCommentsLoaderRet) {  //unable to get the status


          let holder = kRef(sect_holder);
          //if (holder && comments.contains(holder)) {
          if (holder && elementContains.call(comments,holder)) {  // previous status in page

                
            
            //console.log(74,5)
            if (sect_lastUpdate) return;
            sect_lastUpdate = 1;

            timeline.setTimeout(function() {
              //console.log(2633)
              if (holder.textContent !== sect_hText && sect_hTime > 0) {

                if (querySelectorAllFromAnchor.call(comments,'[tabview-cache-time]').length === 1) {

                  sect_hTime--;

                  let innerCommentsLoaderRet = _innerCommentsLoader(rootElement);

                  if (innerCommentsLoaderRet) {
                    //console.log(9442)
                    innerCommentsLoaderRet.f();
                    fetchCommentsFinished();
                  }

                  pendingOne = false;

                }


              }
              sect_lastUpdate = 0
            }, 400)

          } else if (sect_holder) { //previous status not in page but we have the previous text
            
            //console.log(74,6)
            sect_holder = null
            sect_hTime = 0;
            sect_lastUpdate = 0;
                
            pendingOne = false;
            timeline.setTimeout(()=>{
              if(!deferredVarYTDHidden && scheduledCommentRefresh && Q.comments_section_loaded>0 && comments.hasAttribute('hidden')){

                scheduledCommentRefresh=false; // logic tbc
                emptyCommentSection();
                
              }
            },142);
            
            //Q.mutationTarget=null;
            //console.log(87103)
            // try to omit in 2.5.x
            //FP.mtf_attrComments(); // in case for popstate
          } else {
            // previous status removed and no more new status found

            
            cld_comments_nothingFound= timeline.setTimeout(()=>{
              //delay call after DOM modification completed.

              immHidden();

            }, 400)

            

          }
          
          //console.log(74,7)


        } else {

          //console.log(9443)
          innerCommentsLoaderRet.f();
          fetchCommentsFinished();

          pendingOne = true;

        }



      }

      function observerHook(mutationsList, observer){

        let valid = false
        for (const mutation of mutationsList) {

          let target = mutation.target;
          if (!target) break;
          if (!target.id) break;
          let classList = target.classList;


          if (
            classList.contains('ytd-item-section-renderer') ||
            classList.contains('ytd-comments-header-renderer') ||
            classList.contains('ytd-message-renderer')) {
            valid = true
            //break;
          }

          //console.log(701,[...classList],valid)

          break; // only outest mutation


        }
        if (valid) ulfx();
      }

      
      if(sections.hasAttribute('tabview-comment-section-checked')){

        //console.log(3612)
        ulfx();
        

      }else{

        pendingOne = false;
        //console.log(3611)
        const observer = new MutationObserver(observerHook)
        sections.setAttribute('tabview-comment-section-checked','')
        const config = { childList: true, subtree: true }; 
        observer.observe(sections, config);
        ulfx();


      }



    }
    //console.log(3241, location.href)
    
    //console.log('cid_render_section',1)
    let cid_render_section = timeline.setInterval(function() {

     // console.log(3244, location.href)


      const rootElement = comments.parentNode

      let sections = querySelectorFromAnchor.call(rootElement,'ytd-comments#comments > ytd-item-section-renderer#sections');


      if (sections) {

        //console.log('cid_render_section',0)
        timeline.clearInterval(cid_render_section);
        foundSection(sections);

      }

    }, 30)



  }


  let mtc_nr_comments=0;
  let mtc_cid = 0;
  const cssOnceFunc = {
    [`ytd-comments#comments:not([o3r-${sa_comments}])`]:(comments)=>{
      
      // once per {ytd-comments#comments} detection

      let ytdFlexyElm = kRef(ytdFlexy);
      if (!scriptEnable || !ytdFlexyElm) return;

      if (!comments) return;




      if(mtoVisibility_Comments.bindElement(comments)){
        mtoVisibility_Comments.observer.check(9);
      }
      
      pageInit_attrComments = true
      hookSection();

      //let dComments = comments
      //timeline.setTimeout(() => nativeFunc(dComments, "loadComments"), 20)
      //comments = null;

    },
    [`ytd-playlist-panel-renderer#playlist:not([o3r-${sa_playlist}])`]:(playlist)=>{

        // once per {ytd-playlist-panel-renderer#playlist} detection

        let ytdFlexyElm = kRef(ytdFlexy);
        if (!scriptEnable || !ytdFlexyElm) return;

        if (!playlist) return;

        if(mtoVisibility_Playlist.bindElement(playlist)){
          mtoVisibility_Playlist.observer.check(9)  //delay check required for browser bug - hidden changed not triggered 
        }
        playlist = null;

        return;

    },
    '#meta-contents ytd-expander:not([tabview-info-expander])':(expander)=>{

        // once per $$native-info-description$$ {#meta-contents ytd-expander} detection

        let ytdFlexyElm = kRef(ytdFlexy);
        if (!scriptEnable || !ytdFlexyElm) return ;

        if (!expander) return ;
        expander.setAttribute('tabview-info-expander','')
        $(expander).appendTo("#tab-info").attr('data-dom-changed-by-tabview-youtube', scriptVersionForExternal)
  
  

    },
    '#description-and-actions.style-scope.ytd-watch-metadata > #description ytd-text-inline-expander:not([tabview-removed-duplicate])': (teaserInfo)=>{


      // for Teaser UI
      // once per {#description-and-actions.style-scope.ytd-watch-metadata > #description > ytd-text-inline-expander} detection

      let ytdFlexyElm = kRef(ytdFlexy);
      if (!scriptEnable || !ytdFlexyElm) return ;
      let addedInfo = document.querySelector('#tab-info ytd-expander[tabview-info-expander]');

      if(!addedInfo) return;

      if(!document.documentElement.hasAttribute('tabview-injection-js-1-ready')) return;

      teaserInfo.setAttribute('tabview-removed-duplicate','')


      teaserInfo.dispatchEvent(new CustomEvent('tabview-no-duplicate-info'))
      //console.log(56)

    }
  }
  const cssOnce = Object.keys(cssOnceFunc).join(', ')

  const regularCheck = (addP, removeP, mutationTarget)=>{


    let isInvalidAdding = mutationTarget && !mutationTarget.parentNode

      
    let promisesForAddition = !scriptEnable ? [] : addP > 0 && !isInvalidAdding ? [

        (async () => {

          
          //$callOnce('mtf_checkFlexy');

          const rootElement = Q.mutationTarget || kRef(ytdFlexy);

          if(rootElement){

            let fElms = querySelectorAllFromAnchor.call(rootElement,cssOnce)
            if(fElms.length>0){

              for(const fElm of fElms){
                for(let cssSelctor in cssOnceFunc){
                  if(fElm.matches(cssSelctor)){
                    let f= cssOnceFunc[cssSelctor]
                    if(typeof f=='function') f(fElm);
                    break;
                  }

                }
              }

              //$callOnce('mtf_initalAttr_comments');
              //$callOnce('mtf_initalAttr_playlist');
              // $callOnce('mtf_checkDescriptionLoaded');
            }

          }

        })(),
    
        (async () => {


          FP.mtf_initalAttr_chatroom();
          FP.mtf_initalAttr_engagement_panel();
          
          //$callOnce('mtf_initalAttr_chatroom');
         // $callOnce('mtf_initalAttr_engagement_panel');

          mtf_forceCheckLiveVideo();
            mtf_append_comments();
            mtf_liveChatBtnF();
            fixTabs();
            mtf_AfterFixTabs();
            mtf_append_playlist();

        })()

    ] : [];
    
  
    
    let promisesForEveryMutation = !scriptEnable ? [] : [
        (async () => {
            mtf_fix_details();
            mtf_ChatExist();
        })()
    ];

    return [...promisesForAddition, ...promisesForEveryMutation]


  }

  function setOnlyOneEPanel(ePanel){

    layoutStatusMutex.lockWith(unlock => {

      let cPanels = engagement_panels_();
      for (const entry of cPanels.list) {
        if (entry.ePanel != ePanel && entry.visible) ytBtnCloseEngagementPanel(entry.ePanel);
      }
      setTimeout(unlock, 30)

    })

  }

  function immHidden(){


    if(time_preventImmHidden>Date.now()) return timeline.setTimeout(immHidden,400);
    
    let comments = document.querySelector('ytd-comments#comments')

    if(!comments.hasAttribute('hidden')) return;

    mtc_nr_comments=Math.max(mtc_nr_comments, Date.now()+1470)
    //console.log(7052)

    if(!deferredVarYTDHidden && Q.comments_section_loaded>0){

      scheduledCommentRefresh = false;
      emptyCommentSection();


    }

    if(!mtc_cid) mtc_cid=timeline.setInterval(()=>{
      if(mtc_nr_comments>Date.now()) return;
      //console.log(78,3)
        timeline.clearInterval(mtc_cid)
        mtc_cid=0;
        if(mtf_forceCheckLiveVideo_disable===2 || !isNullComments())return;
        _disableComments();

    },80)

  }

  const FP = {

    mtoNav_delayedF: () => {

      let { addP, removeP, mutationTarget } = Q;

      Q.addP = 0;
      Q.removeP = 0;
      
      //mtc_nr_comments=Date.now()+1870
      
    
      mtc_nr_comments= Math.max(mtc_nr_comments, Date.now()+260)


      let regularChecks = regularCheck(addP, removeP, mutationTarget);

      Promise.all(regularChecks).then(() => {
        regularChecks = null;
        
        mtc_nr_comments= Math.max(mtc_nr_comments, Date.now()+260)
        //mtc_nr_comments= Date.now() + 3870 // pending Comments start to load
        
        Q.mutationTarget = null;

        Q.mtoNav_requestNo--;
        //console.log('motnav reduced to', mtoNav_requestNo)
        if (Q.mtoNav_requestNo > 0) {
          Q.mtoNav_requestNo = 1;
          setTimeout(FP.mtoNav_delayedF, mtoInterval);
        }
      })


    },

    mtoNavF: ( /** @type {MutationRecord[]} */ mutations,  /** @type {MutationObserver} */   observer) => {
      //subtree DOM mutation checker - {ytd-watch-flexy} \single \subtree

      newVideoPageCheck()

      if (!scriptEnable) return;
      if (deferredVarYTDHidden) return;

      let ch = false;

      let reg = [];
      let dTarget = null;

      let wAddP = 0,
        wRemoveP = 0;

      let _last_mto_target = null;
      let _last_mto_target_valid = null;

      for (const mutation of mutations) {
        if (!mutation || !mutation.target || !mutation.target.parentNode) continue;

        let elementalMutation = false;
        let tAddP = 0,
          tRemoveP = 0;

        for (const addedNode of mutation.addedNodes) { //theoretically faster: only reading of states
          if (addedNode.nodeType === 1) {
            tAddP++;
            elementalMutation = true;
          }
        }

        for (const removedNode of mutation.removedNodes) { //theoretically faster: only reading of states
          if (removedNode.nodeType === 1) {
            tRemoveP++;
            elementalMutation = true;
          }
        }

        if (elementalMutation) { //skip all addition and removal operations without elemental changes (e.g. textNode modification)

          if (_last_mto_target === mutation.target) {
            // due to addition and removal operations to the same DOM
            if (_last_mto_target_valid) {
              // AddP & RemoveP is still valid
              wAddP += tAddP;
              wRemoveP += tRemoveP;
            }
            continue;
          }
          _last_mto_target = mutation.target;

          if (isMtoTargetSkip(mutation)) {
            _last_mto_target_valid = false;
            continue; //theoretically slower: creation of string variables
          } else {
            _last_mto_target_valid = true;
            wAddP += tAddP;
            wRemoveP += tRemoveP;
          }



          ch = true;

          reg.push(mutation);

          if (dTarget === null) dTarget = mutation.target; //first
          else if (dTarget === true) {} //ytdFlexy
          else if ( elementContains.call(dTarget, mutation.target)) {} //first node is the container to all subsequential targets
          else { dTarget = true; } //the target is not the child of first node

        }

      }

      if (!ch) return; // dTarget must be true OR HTMLElement

      if (dTarget === true) dTarget = kRef(ytdFlexy); // major mutation occurance
      else if (dTarget === kRef(comments_section_loaded_elm) && wAddP > wRemoveP) return true; // ignore if comments are loaded (adding comments)
      else if (isMtoOverallSkip(dTarget)) return; // allow for multiple mutations at the same time - determinated after looping



      // 4 ~ 16 times per full page loading

      Q.addP += wAddP;
      Q.removeP += wRemoveP;

      if (Q.mutationTarget === null) Q.mutationTarget = dTarget;
      else if (Q.mutationTarget != dTarget) Q.mutationTarget = kRef(ytdFlexy);

      //console.log(prettyElm(dTarget), wAddP , wRemoveP, mtoInterval)
      //console.log(prettyElm(dTarget), reg.map(m=>prettyElm(m.target)))
      //console.log(7015, performance.now())



      Q.mtoNav_requestNo++;
      if (Q.mtoNav_requestNo == 1) setTimeout(FP.mtoNav_delayedF, mtoInterval);

    },


    mtoBodyF: ( /** @type {MutationRecord[]} */ mutations,  /** @type {MutationObserver} */   observer) => {
      //subtree DOM mutation checker - {body} \single \subtree

      if (!scriptEnable) return;
      if (deferredVarYTDHidden) return;

      for (const mutation of mutations) {
        for (const addedNode of mutation.addedNodes)
          if (addedNode.nodeType === 1) {
            if (addedNode.nodeName == "DIV" && addedNode.matches('.autocomplete-suggestion:not([autocomplete-disable-updatesc])') ) {
              mtf_fixAutoCompletePosition(addedNode)
            }else if(addedNode.nodeName == "DIV" && (addedNode.id==='lyricscontainer' || addedNode.id==='showlyricsbutton')){

              goYoutubeGeniusLyrics();

            }
          }
      }

    },

    mtf_attrPlaylist: (attrName, newValue) => {
      //attr mutation checker - {ytd-playlist-panel-renderer#playlist} \single
      //::attr ~ hidden    
      //console.log(1210)

      if (!scriptEnable) return;
      if (deferredVarYTDHidden) return;
      let cssElm = kRef(ytdFlexy);
      if (!cssElm) return;

      let playlist = document.querySelector('ytd-playlist-panel-renderer#playlist')
      const tabBtn = document.querySelector('[userscript-tab-content="#tab-list"]');
      let isPlaylistHidden = playlist.hasAttribute('hidden')
      //console.log(1212.2, isPlaylistHidden, playlist.getAttribute('hidden'))
      if (tabBtn) {
        //console.log('attr playlist changed')
        if (tabBtn.classList.contains('tab-btn-hidden') && !isPlaylistHidden) {
          //console.log('attr playlist changed - no hide')
          tabBtn.classList.remove("tab-btn-hidden");
        } else if (!tabBtn.classList.contains('tab-btn-hidden') && isPlaylistHidden) {
          //console.log('attr playlist changed - add hide')
          hideTabBtn(tabBtn);
        }
      }
      /* visible layout for triggering hidden removal */
      akAttr(cssElm, 'tabview-youtube-playlist', isPlaylistHidden);
    },
    mtf_attrComments: (attrName, newValue) => {
      //attr mutation checker - {ytd-comments#comments} \single
      //::attr ~ hidden

      let ytdFlexyElm = kRef(ytdFlexy);
      if (!scriptEnable || !ytdFlexyElm) return;
      if (deferredVarYTDHidden) return;

      let comments = document.querySelector('ytd-comments#comments')
      const tabBtn = document.querySelector('[userscript-tab-content="#tab-comments"]');
      if (!comments || !tabBtn) return;
      let isCommentHidden = comments.hasAttribute('hidden')
      //console.log('attr comments changed')

      mtoInterval = mtoInterval1;
      
      mtc_nr_comments=Date.now()+2870

      if( mtf_forceCheckLiveVideo_disable === 2 ){

      }else if (!isCommentHidden) {

        //console.log(78, 1)
        

        akAttr(ytdFlexyElm, 'tabview-youtube-comments', false, 'K');



        //console.log('attr comments changed - no hide')
        tabBtn.classList.remove("tab-btn-hidden") //if contains

            
        
        //console.log(703)

        mtc_cid&&timeline.clearInterval(mtc_cid);

      } else if (isCommentHidden) {
        
        //console.log(78, 2, mtc_cid)

        akAttr(ytdFlexyElm, 'tabview-youtube-comments', true, 'K'); 

        immHidden();
        

      }


    },


    mtf_attrChatroom: (attrName, newValue) => {
      //attr mutation checker - {ytd-live-chat-frame#chat} \single
      //::attr ~ collapsed

      let ytdFlexyElm = kRef(ytdFlexy);
      if (!scriptEnable || !ytdFlexyElm) return;
      if (deferredVarYTDHidden) return;

      layoutStatusMutex.lockWith(unlock => {

        const chatBlock = document.querySelector('ytd-live-chat-frame#chat')
        const cssElm = kRef(ytdFlexy)

        if (!chatBlock || !cssElm) {
          unlock();
          return;
        }

        if (deferredVarYTDHidden) {
          unlock();
          return;
        }

        if (!cssElm.hasAttribute('userscript-chatblock')) wAttr(cssElm, 'userscript-chatblock', true);
        let isCollapsed = !!chatBlock.hasAttribute('collapsed');
        wAttr(cssElm, 'userscript-chat-collapsed', isCollapsed);

        if (cssElm.hasAttribute('userscript-chatblock') && !isCollapsed) lastShowTab = '#chatroom';

        if (!isCollapsed && document.querySelector('#right-tabs .tab-btn.active') && isWideScreenWithTwoColumns() && !isTheater()) {
          switchTabActivity(null);
          timeline.setTimeout(unlock, 40);
        } else {
          unlock();
        }

        if (!isCollapsed) {
          runAfterExpandChat();
        } else {
          chatBlock.removeAttribute('yt-userscript-iframe-loaded');
        }

      })




    },

    mtf_attrEngagementPanel: ( /** @type {MutationRecord[]} */ mutations,  /** @type {MutationObserver} */   observer) => {
      //attr mutation checker - {ytd-engagement-panel-section-list-renderer} \mutiple
      //::attr ~ visibility

      let ytdFlexyElm = kRef(ytdFlexy);
      if (!scriptEnable || !ytdFlexyElm) return;

      //multiple instance
      if (mutations) {
        for (const mutation of mutations) {
          let ePanel = mutation.target;
          if (ePanel.getAttribute('visibility') == 'ENGAGEMENT_PANEL_VISIBILITY_EXPANDED') {
            setOnlyOneEPanel(ePanel);
            break;
          }
        }
      }
      if (deferredVarYTDHidden) return;

      layoutStatusMutex.lockWith(unlock => {

        const ePanel = document.querySelector('ytd-watch-flexy ytd-engagement-panel-section-list-renderer')
        const cssElm = kRef(ytdFlexy)

        if (!ePanel || !cssElm) {
          unlock();
          return;
        }
        let previousValue = +cssElm.getAttribute('userscript-engagement-panel') || 0;

        let { shownRes, value, count } = engagement_panels_();
        let nextValue = value;
        let nextCount = count;


        if (nextCount == 0 && cssElm.hasAttribute('userscript-engagement-panel')) {
          storeLastPanel=null;
          wAttr(cssElm, 'userscript-engagement-panel', false);
          unlock();
        } else {

          if ((nextCount > 1) || (cssElm.hasAttribute('userscript-engagement-panel') && previousValue === nextValue)) {
            unlock();
            return;
          }

          cssElm.setAttribute('userscript-engagement-panel', nextValue);

          let b = false;
          if (previousValue != nextValue && nextValue > 0) {
            lastShowTab = `#engagement-panel-${nextValue}`;
            b = true;
            storeLastPanel = mWeakRef( shownRes[0])
            //console.log(9999, shownRes[0])
          }

          if (b && document.querySelector('#right-tabs .tab-btn.active') && isWideScreenWithTwoColumns() && !isTheater()) {
            switchTabActivity(null);
            timeline.setTimeout(unlock, 40);
          } else {
            unlock();
          }
        }

      })




    },

    mtf_initalAttr_playlist: () => {
      
    },

    mtf_initalAttr_comments: () => {
      
    },

    mtf_initalAttr_chatroom: () => {
      // every per [new] {ytd-live-chat-frame#chat} detection - reset after mini-playview
      
      let ytdFlexyElm = kRef(ytdFlexy);
      if (!scriptEnable || !ytdFlexyElm) return true;

      const rootElement = Q.mutationTarget || ytdFlexyElm;


      if (!mgChatFrame.inPage()) {

        mtoVisibility_Chatroom.clear(true);

        let chatroom = querySelectorFromAnchor.call(rootElement,`ytd-live-chat-frame#chat:not([${sa_chatroom}]`)
        if (chatroom) {
          mgChatFrame.setVar(chatroom);

          //console.log(124,chatroom)
          if(mtoVisibility_Chatroom.bindElement(chatroom)){
            mtoVisibility_Chatroom.observer.check(9)
          }

          chatroom = null
        }
      }
      return true;

    },

    mtf_initalAttr_engagement_panel: () => {
      // every per $$non-checked-section-list$$ {ytd-watch-flexy ytd-engagement-panel-section-list-renderer:not([o3r-XXXXX])} detection
      
      let ytdFlexyElm = kRef(ytdFlexy);
      if (!scriptEnable || !ytdFlexyElm) return true;

      const rootElement = Q.mutationTarget || ytdFlexyElm;

      let toCheck = false;
      for (const engagement_panel of querySelectorAllFromAnchor.call(rootElement,
        `ytd-watch-flexy ytd-engagement-panel-section-list-renderer:not([o3r-${sa_epanel}])`
        )) {



        let bindRes = mtoVisibility_EngagementPanel.bindElement(engagement_panel, {
          attributes: true,
          attributeFilter: ['visibility'],
          attributeOldValue: true
        })
        

        if(bindRes) toCheck = true;
      }

      if (toCheck) FP.mtf_attrEngagementPanel()

      return true;
    },



    //live-chat / chat-replay

    fireOnce_forceCheckLiveVideo_tf: () => {
      // once per $$player-playback-timestamp$$ {#ytd-player .ytp-time-display} &&  $$chat-frame$$ {ytd-live-chat-frame#chat} detection

      let ytdFlexyElm = kRef(ytdFlexy);
      if (!scriptEnable || !ytdFlexyElm) return;

      let elm = document.querySelector('#ytd-player .ytp-time-display');
      if (elm && elm.classList.contains('ytp-live')) {
        //console.log(7006)
        ytdFlexyElm.setAttribute('userscript-chatblock', 'chat-live')
        //console.log(2441)
        mtf_forceCheckLiveVideo_disable = 2;
        
        _disableComments();
        
       //console.log(701)
        //disableComments_LiveChat();
      }
    },

    

    //comments
/*
    mtf_advancedComments: () => {
      // once per {ytd-comments#comments #continuations} detection

      //let ytdFlexyElm = kRef(ytdFlexy);
      //if (!scriptEnable || !ytdFlexyElm) return true;

      //const rootElement = Q.mutationTarget || ytdFlexyElm;
      //const continuations = document.querySelector("ytd-comments#comments #continuations");
      //if (!continuations) return true;
      //requestingComments = document.querySelector('ytd-comments#comments');
      //scrollForComments();
      return false;
    }
    */


  }





  /** @type {WeakRef | null} */ 
  let displayedPlaylist = null;
  
  /** @type {WeakRef | null} */ 
  let scrollingVideosList = null;

  let scriptEnable = false;
  let scriptEC = 0;
  let lastShowTab = null;

  let _cachedLastVideo = null;
  let videoListBeforeSearch = null;
  let no_fix_contents_until = 0;
  let no_fix_playlist_until = 0;
  let statusCollasped = 0;

  /** @type {WeakRef | null} */ 
  let ytdFlexy = null;

  function pluginUnhook() {
    _pluginUnhook();
    emptyCommentSection();
  }

  function _pluginUnhook() {

    sect_lastUpdate = 0;
    clearTimeout(cld_comments_nothingFound);
    cld_comments_nothingFound = 0;
    sect_holder = null;
    sect_hTime = 0;

    //console.log(8001)

    videoListBeforeSearch = null;
    statusCollasped = 0;
    _cachedLastVideo = null;
    lastShowTab = null;
    displayedPlaylist = null;
    scrollingVideosList = null;
    scriptEnable = false;
    scriptEC++;
    if (scriptEC > 788888888) scriptEC = 188888888;
    ytdFlexy = null;
    wls.layoutStatus = null;

    //console.log('unc01')

    mtoVisibility_EngagementPanel.clear(true)
    mtoVisibility_Playlist.clear(true)
    mtoVisibility_Comments.clear(true)

    mgChatFrame.kVar = null;
    mtoVisibility_Chatroom.clear(true)
    mtoFlexyAttr.clear(true)

    

    for (const elem of document.querySelectorAll(
      ['ytd-expander[tabview-info-expander]'].join(', ')
      )) {
        elem.removeAttribute('tabview-info-expander');
    }

    
    mtoMutation_body.clear(true)
    mtoMutation_watchFlexy.clear(true)
    //FOnce.mtf_checkFlexy = null;
    //FOnce.mtf_initalAttr_comments = null;
    //FOnce.mtf_initalAttr_playlist = null;
    //FOnce.mtf_initalAttr_chatroom = null;
    //FOnce.mtf_initalAttr_engagement_panel = null;
    //FOnce.mtf_advancedComments = null;
    //FOnce.mtf_checkDescriptionLoaded = null;
    //FOnce.mtf_forceCheckLiveVideo = null;
    Q.mtf_chatBlockQ = null;


    mtoInterval = mtoInterval1;

  }

  let comments_section_loaded_elm = null;



  function getTabsHTML() {

    const sTabBtnVideos = `${svgElm(16,16,298,298,svgVideos)}<span>Videos</span>`
    const sTabBtnInfo = `${svgElm(16,16,23.625,23.625,svgInfo)}<span>Info</span>`
    const sTabBtnPlayList = `${svgElm(16,16,426.667,426.667,svgPlayList)}<span>Playlist</span>`

    let str1 = `
        <paper-ripple class="style-scope yt-icon-button">
            <div id="background" class="style-scope paper-ripple" style="opacity:0;"></div>
            <div id="waves" class="style-scope paper-ripple"></div>
        </paper-ripple>
        `;

    let str_fbtns = `
    <div class="font-size-right">
    <div class="font-size-btn font-size-plus">
    <svg width="12" height="12" viewbox="0 0 50 50" preserveAspectRatio="xMidYMid meet" 
    stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-size">
      <path d="M12 25h26"/><path d="M25 12v26"/>
    </svg>
    </div><div class="font-size-btn font-size-minus">
    <svg width="12" height="12" viewbox="0 0 50 50" preserveAspectRatio="xMidYMid meet"
    stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-size">
      <path d="M12 25h26"/>
    </svg>
    </div>
    </div>
    `.replace(/[\r\n]+/g,'')

    const str_tabs = [
            `<a id="tab-btn1" data-name="info" userscript-tab-content="#tab-info" class="tab-btn">${sTabBtnInfo}${str1}${str_fbtns}</a>`,
            `<a id="tab-btn3" userscript-tab-content="#tab-comments" data-name="comments" class="tab-btn">${svgElm(16,16,60,60,svgComments)}<span id="tab3-txt-loader"></span>${str1}${str_fbtns}</a>`,
            `<a id="tab-btn4" userscript-tab-content="#tab-videos" data-name="videos" class="tab-btn">${sTabBtnVideos}${str1}${str_fbtns}</a>`,
            `<a id="tab-btn5" userscript-tab-content="#tab-list" class="tab-btn">${sTabBtnPlayList}${str1}${str_fbtns}</a>`
        ].join('')

    let addHTML = `
        <div id="right-tabs">
            <header>
                <div id="material-tabs">
                    ${str_tabs}
                </div>
            </header>
            <div class="tab-content">
                <div id="tab-info" class="tab-content-cld tab-content-hidden" userscript-scrollbar-render></div>
                <div id="tab-comments" class="tab-content-cld tab-content-hidden" userscript-scrollbar-render></div>
                <div id="tab-videos" class="tab-content-cld tab-content-hidden" userscript-scrollbar-render></div>
                <div id="tab-list" class="tab-content-cld tab-content-hidden" userscript-scrollbar-render></div>
            </div>
        </div>
        `;

    return addHTML

  }


  function onVideoChange() {
    // for popstate & next video

    newVideoPageCheck();

    scheduledCommentRefresh=true;
    let comments = document.querySelector('ytd-comments#comments')
    

    mtf_forceCheckLiveVideo_disable = 0
    mtc_nr_comments= Math.max(mtc_nr_comments, Date.now()+3870)
    //console.log(7053)

    if(!deferredVarYTDHidden && scheduledCommentRefresh && Q.comments_section_loaded>0 && comments.hasAttribute('hidden')){

      scheduledCommentRefresh=false; 
      
      // comment tab btn - hide by timer in attribute change
      if(Q.comments_section_loaded>0) emptyCommentSection();
    }

    if (deferredVarYTDHidden) {  // reset info when hidden
      
      if(Q.comments_section_loaded>0) emptyCommentSection();
    }else{
      checkVisibleEngagementPanel();
      atChange(); // in case no mutation occurance
    }



  }

  function onNavigationEnd(evt) {
    console.log('yt-navigate-finish')
    
    no_fix_contents_until = 0;
    no_fix_playlist_until = 0;
    
    document.documentElement.setAttribute('youtube-ready','')
    
    script_inject_js1.inject();
    document.documentElement.dispatchEvent(new CustomEvent('tabview-ce-hack'))

    forceConfig();
    /*
    console.log(window.ytcfg)
    try{
    window.ytcfg.set({
      "EXPERIMENT_FLAGS": {"kevlar_watch_metadata_refresh":false}})
    }catch(e){}
    */

    newVideoPageCheck(); // required for init

    let mRet =
      (/^https?\:\/\/(\w+\.)*youtube\.com\/watch\?(\w+\=[^\/\?\&]+\&|\w+\=?\&)*v=[\w\-\_]+/.test(window.location.href) ? 1 : 0) +
      (document.querySelector('ytd-watch-flexy[tabview-selection]') ? 2 : 0);

    if (mRet === 1) {

      document.addEventListener('loadedmetadata', function(evt) {
        if (evt.target.matches('video[tabview-mainvideo]')) {
          setTimeout(onVideoChange, 30)
        }
      }, true)

      pluginUnhook(); // in case not triggered by popstate - say mini playing

      let timeout = 4; // max. 4 animation frames

      let tf = () => {

        if (--timeout > 0 && !document.querySelector('#player video')) return requestAnimationFrame(tf);

        let ytdFlexyElm = document.querySelector('ytd-watch-flexy')

        if(!ytdFlexyElm) return;


        scriptEnable = true;
        scriptEC++;

        no_fix_contents_until = 0;
        no_fix_playlist_until = 0;

        ytdFlexy = mWeakRef(ytdFlexyElm)

        let timeoutR_findRelated = new Timeout();
        timeoutR_findRelated.set(function() {
          let ytdFlexyElm = kRef(ytdFlexy);
          if(!ytdFlexyElm) return true;
          let related = querySelectorFromAnchor.call(ytdFlexyElm,"#related");
          if (!related) return true;
          foundRelated(related);
        }, 100, 10)

        function foundRelated(related) {
          let promise = Promise.resolve();
          if (!document.querySelector("#right-tabs")) {
            promise = promise.then(() => {
              $(getTabsHTML()).insertBefore(related).attr('data-dom-created-by-tabview-youtube', scriptVersionForExternal);
            })
          }
          promise.then(runAfterTabAppended)
        }

        /*
        setTimeout(() => {
          for (const s of document.querySelectorAll('#right-tabs [userscript-scrollbar-render]')) {
            Promise.resolve(s).then(s => {
              if (s && s.scrollTop > 0) s.scrollTop = 0;
              let child = s.firstElementChild;
              if (child && child.scrollTop > 0) child.scrollTop = 0;
            });
          }
        }, 90)
        */


      }

      tf();

    } else if (mRet === 3) {

      if(!scriptEnable) return;

      let elmComments = document.querySelector('ytd-comments#comments')

      if (elmComments && querySelectorFromAnchor.call(elmComments,'ytd-item-section-renderer#sections.style-scope.ytd-comments')){
        nativeFunc(elmComments, "loadComments")
      }

    } else if (mRet === 0) {
      

      pluginUnhook(); // in case not triggered by popstate - say mini playing

    }

    if(mRet & 1){
      
      setTimeout(()=>{
        
        Q.mutationTarget=null;
        atChange(); // in case no mutation occurance
        //console.log(87100)
        
        // try to omit in 2.5.x
        //FP.mtf_attrComments()
      },160);
        
    }

  }


  function setToActiveTab(defaultTab) {
    if (isTheater() && isWideScreenWithTwoColumns()) return;
    const jElm = document.querySelector(`a[userscript-tab-content="${switchTabActivity_lastTab}"]:not(.tab-btn-hidden)`) ||
      document.querySelector(`a[userscript-tab-content="${(defaultTab||settings.defaultTab)}"]:not(.tab-btn-hidden)`) ||
      document.querySelector("a[userscript-tab-content]:not(.tab-btn-hidden)") ||
      null;
    switchTabActivity(jElm);
    return !!jElm;
  }

  function getWrapper(wrapperId) {
    let $wrapper = $(`#${wrapperId}`);
    if (!$wrapper[0]) $wrapper = $(`<div id="${wrapperId}"></div>`)
    return $wrapper.first();
  }

  function regularCheckFull(){
    
    if(scriptEnable){

      no_fix_contents_until = 0;
      no_fix_playlist_until = 0;
      Q.mutationTarget =null;
      regularCheck(1, 0, null);
      
  
      FP.mtf_attrEngagementPanel();
        
      FP.mtf_attrPlaylist();
    
      //console.log(87102)
      // try to omit in 2.5.x
      //FP.mtf_attrComments();   
    
      FP.mtf_attrChatroom();

    }
    
  }

  function runAfterTabAppended() {

    document.documentElement.setAttribute('plugin-tabview-youtube', '')

    const ytdFlexyElm = kRef(ytdFlexy)
    if(!ytdFlexyElm) return;
    if (!ytdFlexyElm.hasAttribute('tabview-selection')) ytdFlexyElm.setAttribute('tabview-selection', '')

    

    
    //console.log('unc02')

    // append the next videos 
    // it exists as "related" is already here
    fixTabs();

    // just switch to the default tab
    setToActiveTab();


    prepareTabBtn();


    // append the detailed meta contents to the tab-info
    // ** FOnce.mtf_checkDescriptionLoaded = FP.mtf_checkDescriptionLoaded;
    // ** if (Q.mutationTarget === null) $callOnceAsync('mtf_checkDescriptionLoaded');

    // force window scroll when #continuations is first detected and #comments still [hidden]
    //FOnce.mtf_advancedComments = FP.mtf_advancedComments;
    //if (Q.mutationTarget === null) $callOnceAsync('mtf_advancedComments');

    // use video player's element to detect the live-chat situation (no commenting section)
    // this would be very useful if the live chat is collapsed, i.e. iframe has no indication on the where it is live or replay
    //FOnce.mtf_forceCheckLiveVideo = FP.mtf_forceCheckLiveVideo;
    //if (Q.mutationTarget === null) $callOnceAsync('mtf_forceCheckLiveVideo');
    //mtf_forceCheckLiveVideo();


    // Attr Mutation Observer - #playlist - hidden
    //clearMutationObserver(mtoVs, 'mtoVisibility_Playlist')
    // Attr Mutation Observer callback - #playlist - hidden

    // pending for #playlist and set Attribute Observer
    // ** FOnce.mtf_initalAttr_playlist = FP.mtf_initalAttr_playlist
    // ** if (Q.mutationTarget === null) $callOnceAsync('mtf_initalAttr_playlist');

    // Attr Mutation Observer - ytd-comments#comments - hidden
    //clearMutationObserver(mtoVs, 'mtoVisibility_Comments')
    // Attr Mutation Observer callback - ytd-comments#comments - hidden

    // pending for #comments and set Attribute Observer
    // ** FOnce.mtf_initalAttr_comments = FP.mtf_initalAttr_comments;
    // ** if (Q.mutationTarget === null) $callOnceAsync('mtf_initalAttr_comments');


    //clearMutationObserver(mtoVs, 'mtoVisibility_Chatroom');
    //FOnce.mtf_initalAttr_chatroom = FP.mtf_initalAttr_chatroom
    //if (Q.mutationTarget === null) $callOnceAsync('mtf_initalAttr_chatroom');

    // clearMutationObserver(mtoVs, 'mtoVisibility_EngagementPanel');
    // for (const engagement_panel of document.querySelectorAll('ytd-watch-flexy ytd-engagement-panel-section-list-renderer:not([tabview-attr-checked])')) {
    //   engagement_panel.removeAttribute('tabview-attr-checked');
    // }
    //FOnce.mtf_initalAttr_engagement_panel = FP.mtf_initalAttr_engagement_panel
    //if (Q.mutationTarget === null) $callOnceAsync('mtf_initalAttr_engagement_panel');


    mtoFlexyAttr.clear(true)
    mtf_checkFlexy()


    document.querySelector("#right-tabs .tab-content").addEventListener('scroll', makeBodyScrollByEvt, true);


    Q.addP = 0;
    Q.removeP = 0;
    Q.mutationTarget = null;

    Q.mtoNav_requestNo = 0;


    mtoMutation_watchFlexy.bindElement(ytdFlexyElm, {
      childList: true,
      subtree: true,
      attributes: false
    })

    // for automcomplete plugin or other userscript plugins
    // document.body for Firefox >= 60
    mtoMutation_body.bindElement(document.querySelector('body'), {
      childList: true,
      subtree: false,
      attributes: false
    })

    regularCheckFull()


    



  }


  function fetchCommentsFinished() {
    let ytdFlexyElm = kRef(ytdFlexy);
    if (!scriptEnable || !ytdFlexyElm) return;
    if(mtf_forceCheckLiveVideo_disable===2) return;
    akAttr(ytdFlexyElm, 'tabview-youtube-comments', false, 'LS')
  }

  function setCommentSection( /** @type {number} */ value) {

    Q.comments_section_loaded = value;

    if (value === 0) {
      sect_lastUpdate = 0;
      timeline.clearTimeout(cld_comments_nothingFound);
      cld_comments_nothingFound=0;
      
      comments_section_loaded_elm = null;
    }

  }

  function resetCommentSection(){
    

    let tab_btn = document.querySelector('.tab-btn[userscript-tab-content="#tab-comments"]')


    if(tab_btn){

      let span = querySelectorFromAnchor.call(tab_btn,'span#tab3-txt-loader');

      tab_btn.removeAttribute('loaded-comment')
      tab_btn.classList.remove('tab-btn-hidden')
        
      if(span){
        span.textContent='';
      }
    }


    setCommentSection(0);


  }


  function emptyCommentSection(){
    

    let tab_btn = document.querySelector('.tab-btn[userscript-tab-content="#tab-comments"]')


    if(tab_btn){

      let span = querySelectorFromAnchor.call(tab_btn,'span#tab3-txt-loader');

      tab_btn.removeAttribute('loaded-comment')
        
      if(span){
        span.textContent='';
      }
    }


    setCommentSection(0);


  }



  function _disableComments() {
    time_preventImmHidden = 0;
    
    //requestingComments = null;
    mtc_cid && timeline.clearInterval(mtc_cid)
    mtc_cid=0;

    if (!scriptEnable) return;
    let cssElm = kRef(ytdFlexy);
    if (!cssElm) return;

    mtoInterval = mtoInterval2;

    if(Q.comments_section_loaded>0) return; //already displayed / disabled

    scheduledCommentRefresh=false;
    setCommentSection(2);

    comments_section_loaded_elm = mWeakRef(document.querySelector('ytd-comments#comments div#contents') || null)

    let tabBtn = document.querySelector('.tab-btn[userscript-tab-content="#tab-comments"]');
    if(tabBtn) {
      tabBtn.removeAttribute('loaded-comment')
      if (!tabBtn.classList.contains('tab-btn-hidden')) {
        hideTabBtn(tabBtn)
      }
    }

    akAttr(cssElm, 'tabview-youtube-comments', true, 'D');


  }




  let layoutStatusMutex = new Mutex();

  function forceDisplayChatReplay() {
    let items = chatFrameElement('yt-live-chat-item-list-renderer #items');
    if (items && items.childElementCount !== 0) return;

    let ytd_player = document.querySelector('ytd-player#ytd-player');
    if (!ytd_player) return;
    let videoElm = querySelectorFromAnchor.call(ytd_player,'video');
    if (!videoElm) return;

    let video = videoElm;
    if (videoElm && video.currentTime > 0 && !video.ended && video.readyState > video.HAVE_CURRENT_DATA) {
      let chat = document.querySelector('ytd-live-chat-frame#chat');
      if (chat) {
        nativeFunc(chat, "postToContentWindow", [{ "yt-player-video-progress": videoElm.currentTime }])
      }
    }

  }



  function runAfterExpandChat() {


    if(runAfterExpandChat.cid_chatFrameCheck1) timeline.clearInterval(runAfterExpandChat.cid_chatFrameCheck1);
    if(runAfterExpandChat.cid_chatFrameCheck2) timeline.clearInterval(runAfterExpandChat.cid_chatFrameCheck2);
    runAfterExpandChat.cid_chatFrameCheck1=0;
    runAfterExpandChat.cid_chatFrameCheck2=0;

    new Promise(resolve => {

      let chatFrame_st = Date.now();
      runAfterExpandChat.cid_chatFrameCheck1 = 0;

      let sEF = new ScriptEF();
      runAfterExpandChat.cid_chatFrameCheck1 = timeline.setInterval(() => {
        if (!sEF.isValid()) return runAfterExpandChat.cid_chatFrameCheck1 = timeline.clearInterval(runAfterExpandChat.cid_chatFrameCheck1);
        let cDoc = chatFrameContentDocument();
        if (cDoc) {
          runAfterExpandChat.cid_chatFrameCheck1 = timeline.clearInterval(runAfterExpandChat.cid_chatFrameCheck1);
          resolve();
        } else if (!scriptEnable || !isChatExpand() || Date.now() - chatFrame_st > 6750) {
          runAfterExpandChat.cid_chatFrameCheck1 = timeline.clearInterval(runAfterExpandChat.cid_chatFrameCheck1);
        }
      }, 60);


    }).then(() => new Promise(resolve => {


      let chatFrame_st = Date.now();
      runAfterExpandChat.cid_chatFrameCheck2 = 0;

      let sEF = new ScriptEF();
      runAfterExpandChat.cid_chatFrameCheck2 = timeline.setInterval(() => {
        if (!sEF.isValid()) return runAfterExpandChat.cid_chatFrameCheck2 = timeline.clearInterval(runAfterExpandChat.cid_chatFrameCheck2);
        let app = chatFrameElement('yt-live-chat-app');
        if (app) {
          runAfterExpandChat.cid_chatFrameCheck2 = timeline.clearInterval(runAfterExpandChat.cid_chatFrameCheck2);
          resolve(app);
        } else if (!scriptEnable || !isChatExpand() || Date.now() - chatFrame_st > 6750*3) {
          runAfterExpandChat.cid_chatFrameCheck2 = timeline.clearInterval(runAfterExpandChat.cid_chatFrameCheck2);
        }
      }, 60);


    })).then(app => {


      let cDoc = app.ownerDocument;

      if (!scriptEnable || !isChatExpand()) return;
      if(cDoc.querySelector('#userscript-tabview-chatroom-css')) return;
      addStyle(`      
                body #input-panel.yt-live-chat-renderer::after {
                    background: transparent;
                }

                
                #items.yt-live-chat-item-list-renderer{
                  contain: layout paint style;
                }
                #item-scroller.yt-live-chat-item-list-renderer{
                  contain: size style;
                }
                #chat.style-scope.yt-live-chat-renderer{
                  contain: size layout paint style;
                }

                
                #item-offset.yt-live-chat-item-list-renderer{
                  contain: layout paint style;
                }

                img.style-scope.yt-img-shadow[width][height]{
                  contain: size layout paint style;
                }

                #item-list > yt-live-chat-item-list-renderer, 
                #item-list > yt-live-chat-item-list-renderer > #contents{
                    contain: size layout paint style;
                }
                
                yt-live-chat-text-message-renderer{
                  contain: layout paint style;
                }

                yt-live-chat-text-message-renderer.style-scope.yt-live-chat-item-list-renderer{
                  contain: style;
                }
                
                yt-live-chat-text-message-renderer.style-scope.yt-live-chat-item-list-renderer .style-scope.yt-live-chat-text-message-renderer,
                yt-live-chat-ticker-paid-message-item-renderer
                {
                  contain: paint style;
                }
                
                 
                yt-img-shadow#author-photo.style-scope{
                  contain: layout paint style;
                  content-visibility: auto;
                  contain-intrinsic-size: 24px 24px;
                }
                 
                #item-offset.style-scope.yt-live-chat-item-list-renderer,
                #items.style-scope.yt-live-chat-item-list-renderer {
                  contain: layout paint;
                }







                /*
                .style-scope.yt-live-chat-text-message-renderer {
                  cursor: default;
                }
                 
                #author-photo.style-scope.yt-live-chat-text-message-renderer,
                yt-live-chat-author-chip.style-scope.yt-live-chat-text-message-renderer,
                yt-live-chat-author-chip.style-scope.yt-live-chat-text-message-renderer ~ span#message.style-scope.yt-live-chat-text-message-renderer
                {
                  pointer-events: none;
                }
                 
                */

                yt-live-chat-text-message-renderer:not([author-is-owner]) #author-photo.style-scope.yt-live-chat-text-message-renderer,
                yt-live-chat-text-message-renderer:not([author-is-owner]) yt-live-chat-author-chip.style-scope.yt-live-chat-text-message-renderer{
                  pointer-events: none;
                }
                 
                yt-live-chat-text-message-renderer:not([author-is-owner]) span#message.style-scope.yt-live-chat-text-message-renderer > img.emoji.yt-formatted-string.style-scope.yt-live-chat-text-message-renderer{
                  contain: layout paint style;
                  cursor: default;
                  pointer-events: none;
                }

                yt-live-chat-text-message-renderer:not([author-is-owner]) span#message.style-scope.yt-live-chat-text-message-renderer{
                  contain: layout paint style;
                  cursor: default;
                  pointer-events: none;
                }


                yt-live-chat-membership-item-renderer #header-content.style-scope.yt-live-chat-membership-item-renderer{
                  contain: layout paint style;
                  cursor: default;
                  pointer-events: none;
                }

                yt-live-chat-paid-message-renderer #header-content.yt-live-chat-paid-message-renderer,
                yt-live-chat-paid-message-renderer #message.yt-live-chat-paid-message-renderer
                {
                  contain: layout paint style;
                  cursor: default;
                  pointer-events: none;
                }
                
                
                yt-live-chat-paid-sticker-renderer #content.style-scope.yt-live-chat-paid-sticker-renderer{
                  contain: layout paint style;
                  cursor: default;
                  pointer-events: none;
                }

                 
                body yt-live-chat-app{
                  contain: size layout paint style;
                  content-visibility: auto;
                  transform: translate3d(0,0,0);
                  overflow: hidden;
                }
                 
                .style-scope.yt-live-chat-item-list-renderer{
                  box-sizing: border-box; 
                }

                #item-offset.style-scope.yt-live-chat-item-list-renderer{
                  contain: size layout paint style;
                }
                #item-offset.style-scope.yt-live-chat-item-list-renderer > #items:only-child{
                  contain: layout paint style;
                }

                yt-live-chat-text-message-renderer:nth-last-child(5n):hover #menu.yt-live-chat-text-message-renderer{
                  transition-delay: 100ms;
                }
                yt-live-chat-text-message-renderer:nth-last-child(5n+1):hover #menu.yt-live-chat-text-message-renderer{
                  transition-delay: 95ms;
                }
                yt-live-chat-text-message-renderer:nth-last-child(5n+2):hover #menu.yt-live-chat-text-message-renderer{
                  transition-delay: 90ms;
                }
                yt-live-chat-text-message-renderer:nth-last-child(5n+3):hover #menu.yt-live-chat-text-message-renderer{
                  transition-delay: 85ms;
                }
                yt-live-chat-text-message-renderer:nth-last-child(5n+4):hover #menu.yt-live-chat-text-message-renderer{
                  transition-delay: 80ms;
                }

 

            `, cDoc.documentElement).id='userscript-tabview-chatroom-css'

            let frc= 0;
      let fullReady = ()=>{


        if(!cDoc.documentElement.hasAttribute('style') && ++frc<900) return timeline.setTimeout(fullReady,10);

        if (cDoc.querySelector('yt-live-chat-renderer #continuations')) {
          timeline.setTimeout(() => mtf_ChatExist(), 40);
          $(document.querySelector('ytd-live-chat-frame#chat')).attr('yt-userscript-iframe-loaded', '')
        }

        forceDisplayChatReplay();

        let iframe = document.querySelector('ytd-live-chat-frame iframe#chatframe');


        iframe.dispatchEvent(new CustomEvent("tabview-chatroom-ready"))



      }
      fullReady();



    })

  }

  function flexyAttr_toggleFlag(mFlag, b, flag) {
    if (b) mFlag = mFlag | flag;
    else mFlag = mFlag & ~flag;
    return mFlag;
  }

  function flexAttr_toLayoutStatus(nls, attributeName) {

    let attrElm, b, v;
    switch (attributeName) {
      case 'theater':
        nls = flexyAttr_toggleFlag(nls, isTheater(), LAYOUT_THEATER);
        break;
      case 'userscript-chat-collapsed':
      case 'userscript-chatblock':
        attrElm = kRef(ytdFlexy);
        if (hasAttribute(attrElm, 'userscript-chat-collapsed')) {
          nls = flexyAttr_toggleFlag(nls, true, LAYOUT_CHATROOM | LAYOUT_CHATROOM_COLLASPED);
        } else {
          nls = flexyAttr_toggleFlag(nls, hasAttribute(attrElm, 'userscript-chatblock'), LAYOUT_CHATROOM);
          nls = flexyAttr_toggleFlag(nls, false, LAYOUT_CHATROOM_COLLASPED);
        }
        break;
      case 'is-two-columns_':
        nls = flexyAttr_toggleFlag(nls, isWideScreenWithTwoColumns(), LAYOUT_TWO_COLUMNS);
        break;

      case 'tabview-selection':
        b = isNonEmptyString(kRef(ytdFlexy).getAttribute('tabview-selection'));
        nls = flexyAttr_toggleFlag(nls, b, LAYOUT_TAB_EXPANDED);
        break;

      case 'fullscreen':
        b = isNonEmptyString(kRef(ytdFlexy).getAttribute('fullscreen'));
        nls = flexyAttr_toggleFlag(nls, b, LAYOUT_FULLSCREEN);
        break;

      case 'userscript-engagement-panel':
        v = kRef(ytdFlexy).getAttribute('userscript-engagement-panel');
        b = (+v > 0)
        nls = flexyAttr_toggleFlag(nls, b, LAYOUT_ENGAGEMENT_PANEL_EXPAND);
        break;

    }

    return nls;


  }

  let mtf_attrFlexy = (mutations, observer) => {

    //attr mutation checker - $$ytdFlexyElm$$ {ytd-watch-flexy} \single
    //::attr    
    // ~ 'userscript-chat-collapsed', 'userscript-chatblock', 'theater', 'is-two-columns_', 
    // ~ 'tabview-selection', 'fullscreen', 'userscript-engagement-panel', 
    // ~ 'hidden'

    //console.log(15330, scriptEnable, kRef(ytdFlexy), mutations)

    if (!scriptEnable) return;

    const cssElm = kRef(ytdFlexy)
    if (!cssElm) return;

    if (!mutations) return;

    //console.log(15340)
    ytdFlexyHiddenCheck(mutations);

    const old_layoutStatus = wls.layoutStatus
    if (old_layoutStatus === null) return;
    let new_layoutStatus = old_layoutStatus;

    let checkedChat = false;

    for (const mutation of mutations) {
      new_layoutStatus = flexAttr_toLayoutStatus(new_layoutStatus, mutation.attributeName);
      if (mutation.attributeName == 'userscript-chat-collapsed' || mutation.attributeName == 'userscript-chatblock') {

        if(!checkedChat){
          checkedChat = true; // avoid double call

          if (cssElm.getAttribute('userscript-chatblock') === 'chat-live') {
            // assigned new attribute - "chat-live" => disable comments section
            
            _disableComments();
          }

          if (!cssElm.hasAttribute('userscript-chatblock')) {
            // might or might not collapsed before
            timeline.setTimeout(() => {
              if (!scriptEnable) return;
              //delayed call => check with the "no active focus" condition with chatroom status
              if (!isAnyActiveTab() && !isChatExpand() && !isTheater() && isWideScreenWithTwoColumns() && !isFullScreen()) {
                setToActiveTab();
              }
            }, 240);
          }
        }

      }else if(mutation.attributeName == 'userscript-engagement-panel'){
        // assume any other active component such as tab content and chatroom
        
        if (+(cssElm.getAttribute('userscript-engagement-panel')||0)===0 && +mutation.oldValue>0) {
          timeline.setTimeout(() => {
            if (!scriptEnable) return;
            //delayed call => check with the "no active focus" condition with engagement panel status
            if (!isAnyActiveTab() && !isEngagementPanelExpanded() && !isTheater() && isWideScreenWithTwoColumns() && !isFullScreen() && !isChatExpand()) {
              setToActiveTab();
            }
          }, 240);
        }
      }
    }

    if (new_layoutStatus !== old_layoutStatus) wls.layoutStatus = new_layoutStatus

  }

  const mtf_checkFlexy = () => {
    // once per $$native-ytd-watch-flexy$$ {ytd-watch-flexy} detection

    let ytdFlexyElm = kRef(ytdFlexy);
    if (!scriptEnable || !ytdFlexyElm) return true;


    wls.layoutStatus = null;

    let isFlexyHidden = (deferredVarYTDHidden = ytdFlexyElm.hasAttribute('hidden'));

    if (!isFlexyHidden) {
      let rChatExist = base_ChatExist();
      if (rChatExist) {
        let { attr_chatblock, attr_chatcollapsed } = rChatExist;
        if (attr_chatblock === null) {
          //remove attribute if it is unknown
          attr_chatblock = false;
          attr_chatcollapsed = false;
        }
        wAttr(ytdFlexyElm, 'userscript-chatblock', attr_chatblock)
        wAttr(ytdFlexyElm, 'userscript-chat-collapsed', attr_chatcollapsed)
      }
    }

    let rTabSelection = [...querySelectorAllFromAnchor.call(ytdFlexyElm,'.tab-btn[userscript-tab-content]')]
      .map(elm => ({ elm, hidden: elm.classList.contains('tab-btn-hidden') }));

    if(rTabSelection.length === 0){
      wAttr(ytdFlexyElm, 'tabview-selection', false);
    }else{
      rTabSelection=rTabSelection.filter(entry => entry.hidden !== true); // all available tabs
      if (rTabSelection.length === 0) wAttr(ytdFlexyElm, 'tabview-selection', '');
    }
    rTabSelection = null;
      
    let rEP = engagement_panels_();
    if (rEP && rEP.count > 0) wAttr(ytdFlexyElm, 'userscript-engagement-panel', false);
    //else wAttr(ytdFlexyElm, 'userscript-engagement-panel', rEP.value + ""); // can be 0
    else if(rEP.value>0) wAttr(ytdFlexyElm, 'userscript-engagement-panel', rEP.value + ""); // can be 0

    let ls = 0;
    ls = flexAttr_toLayoutStatus(ls, 'theater')
    ls = flexAttr_toLayoutStatus(ls, 'userscript-chat-collapsed')
    ls = flexAttr_toLayoutStatus(ls, 'userscript-chatblock')
    ls = flexAttr_toLayoutStatus(ls, 'is-two-columns_')
    ls = flexAttr_toLayoutStatus(ls, 'tabview-selection')
    ls = flexAttr_toLayoutStatus(ls, 'fullscreen')
    ls = flexAttr_toLayoutStatus(ls, 'userscript-engagement-panel')

    wls.layoutStatus = ls

    mtoFlexyAttr.bindElement(ytdFlexyElm,{
      attributes: true,
      attributeFilter: ['userscript-chat-collapsed', 'userscript-chatblock', 'theater', 'is-two-columns_', 'tabview-selection', 'fullscreen', 'userscript-engagement-panel', 'hidden'],
      attributeOldValue: true
    })

    ytdFlexyHiddenCheckBasic(ytdFlexyElm);


    let columns = document.querySelector('ytd-page-manager#page-manager #columns')
    if (columns) {
      wAttr(columns, 'userscript-scrollbar-render', true);
    }

    return false;
  }
  

  function ytdFlexyHiddenCheckBasic(ytdFlexyElm){
    // for both hidden and non-hidden ytd-watch-flexy

    deferredVarYTDHidden = ytdFlexyElm.hasAttribute('hidden');

   // console.log(15403)
    document.documentElement.classList.toggle('tabview-normal-player',!deferredVarYTDHidden)

  }

  function checkVisibleEngagementPanel(){
    
    if(storeLastPanel){

      let elm_storeLastPanel = kRef(storeLastPanel);

      if(elm_storeLastPanel && !isDOMVisible(elm_storeLastPanel) ){
        storeLastPanel=null;
        ytBtnCloseEngagementPanels();
      }

    }

  }

  function ytdFlexyHiddenCheck(mutations) {

    //console.log(15350)

    const ytdFlexyElm = kRef(ytdFlexy)
    if (!ytdFlexyElm) return;
    let muHidden = false

    for (const mutation of mutations) {
      if (mutation.attributeName === 'hidden') {
        //console.log(343)
        muHidden = true;
        break;
      }
    }

    if (!muHidden) return;
    

    
    mtc_nr_comments= Math.max(mtc_nr_comments, Date.now()+2870)
    //console.log(7054)
    //console.log(7004)
    deferredVarYTDHidden = ytdFlexyElm.hasAttribute('hidden');

    
    if(deferredVarYTDHidden && scheduledCommentRefresh && Q.comments_section_loaded>0){
      scheduledCommentRefresh=false;
    } 

    //console.log(15400)
    if(!deferredVarYTDHidden){
      mtf_forceCheckLiveVideo_disable = 0  
      timeline.setTimeout(function() {
        mtf_ChatExist();  
        layoutStatusMutex.lockWith(unlock=>{
          atChange(); // in case no mutation occurance
          ytdFlexyHiddenCheckBasic(ytdFlexyElm);
          dispatchWindowResize(); // player control positioning
          timeline.setTimeout(unlock, 40);          
        })        
      }, 40);
    }else{
      //console.log(15401)
      timeline.setTimeout(function() {
        //console.log(15402)
        ytdFlexyHiddenCheckBasic(ytdFlexyElm);
      }, 40);
    }

  }




  let switchTabActivity_lastTab = null

  function setDisplayedPlaylist() {
    //override the default youtube coding event prevention
    let cssElm = kRef(ytdFlexy);
    if (!scriptEnable || !cssElm) return;
    displayedPlaylist = mWeakRef(document.querySelector('ytd-watch-flexy #tab-list:not(.tab-content-hidden) ytd-playlist-panel-renderer') || null);
  }


  
  let recordScrollTop = 0

  function switchTabActivity(activeLink) {
    if (!scriptEnable) return;

    const ytdFlexyElm = kRef(ytdFlexy);

    if (!ytdFlexyElm) return;

    if (activeLink && activeLink.classList.contains('tab-btn-hidden')) return; // not allow to switch to hide tab

    if (isTheater() && isWideScreenWithTwoColumns()) activeLink = null;

    /*
    let isPrevTabComments = document.querySelector('.tab-content-cld:not(.tab-content-hidden)');
    isPrevTabComments=isPrevTabComments&&isPrevTabComments.matches('#tab-comments')

    if(isPrevTabComments){
    
      let comments_tab = document.querySelector('#tab-comments');
      if(comments_tab){
        let st = comments_tab.scrollTop;
        if(st>=0) recordScrollTop = st;
      }


    }
    */

    function runAtEnd() {

      
    //console.log(12312)

      if (activeLink) lastShowTab = activeLink.getAttribute('userscript-tab-content')

      displayedPlaylist = null;
      scrollingVideosList = null;

      if (activeLink && lastShowTab == '#tab-list') {
        setDisplayedPlaylist();
      } else if (activeLink && lastShowTab == '#tab-videos') {
        scrollingVideosList = mWeakRef(document.querySelector('ytd-watch-flexy #tab-videos:not(.tab-content-hidden) [placeholder-videos]'));
      }


      ytdFlexyElm.setAttribute('tabview-selection', activeLink ? lastShowTab : '')

      if (lastShowTab == '#tab-comments' && (ytdFlexyElm.getAttribute('tabview-youtube-comments') || '').lastIndexOf('S') >= 0) {

        
        if(mtf_forceCheckLiveVideo_disable===2) {}
        else{
          akAttr(ytdFlexyElm, 'tabview-youtube-comments', false, 'L');

          /*
          requestAnimationFrame(() => {
            let comments_tab = document.querySelector('#tab-comments');
            if (comments_tab && comments_tab.scrollTop > 0) comments_tab.scrollTop = 0;
          });
          */
        }

      }

      /*
    let isNewTabComments = document.querySelector('.tab-content-cld:not(.tab-content-hidden)')
    
    isNewTabComments=isNewTabComments&&isNewTabComments.matches('#tab-comments')

    if(isNewTabComments){
      
      let comments_tab = document.querySelector('#tab-comments');
      if(comments_tab){
        let st = comments_tab.scrollTop;
        if(Math.abs(st-recordScrollTop)>0.9) comments_tab.scrollTop=recordScrollTop;
      }

      
      
    }
    */


    }

    const links = document.querySelectorAll('#material-tabs a[userscript-tab-content]');



    for (const link of links) {
      let content = document.querySelector(link.getAttribute('userscript-tab-content'));
      if (link && content) {
        if (link !== activeLink) {
          link.classList.remove("active");
          content.classList.add("tab-content-hidden");
        } else {
          link.classList.add("active");
          content.classList.remove("tab-content-hidden");
          //timeline.setTimeout(()=>content.focus(),400);

        }
      }
    }

    runAtEnd();


  }


  const STORE_VERSION = 1;
  const STORE_key = 'userscript-tabview-settings';
  function getStore(){
    let s = localStorage[STORE_key];
    function resetStore(){
      let ret = {
        version: 1,
      };
      localStorage[STORE_key]=JSON.stringify(ret);
      return ret;
    }
    if(!s) return resetStore();
    let obj = null;
    try{
      obj = JSON.parse(s);
    }catch(e){}
    return obj && obj.version === STORE_VERSION ? obj : resetStore();
  }

  function setStore(obj){
    if(!obj || typeof obj !=='object') return false;
    if(obj.version !== STORE_VERSION) return false;
    localStorage[STORE_key]=JSON.stringify(obj);
    return true;
  }

  let tabsUiScript_setclick = false;

  function prepareTabBtn() {

    const materialTab = document.querySelector("#material-tabs")
    if (!materialTab) return;

    let noActiveTab = !!document.querySelector('ytd-watch-flexy[userscript-chatblock]:not([userscript-chat-collapsed])')

    const activeLink = querySelectorFromAnchor.call(materialTab,'a[userscript-tab-content].active:not(.tab-btn-hidden)')
    if (activeLink) switchTabActivity(noActiveTab ? null : activeLink)

    if (!tabsUiScript_setclick) {
      tabsUiScript_setclick = true;
      $(materialTab).on("click", "a", function(evt) {

        //console.log(8510)
        let ytdFlexyElm = kRef(ytdFlexy);
        if (!scriptEnable || !ytdFlexyElm) return null;

        if (!this.hasAttribute('userscript-tab-content')) return;

        if (evt.target.matches('.font-size-btn')) return;


        evt.preventDefault();

        //console.log(8511)

/*
        if (this.getAttribute('userscript-tab-content') == '#tab-comments' && parseInt(ytdFlexyElm.getAttribute('tabview-youtube-comments') || '') < 0) {
          
        console.log(8512)
          return;
        }*/

        //console.log(8513)
        new Promise(requestAnimationFrame).then(() => {


          //console.log(8514)
          layoutStatusMutex.lockWith(unlock => {

            //console.log(8515)
            switchTabActivity_lastTab = this.getAttribute('userscript-tab-content');

            let isActiveAndVisible = this.classList.contains('tab-btn') && this.classList.contains('active') && !this.classList.contains('tab-btn-hidden')

            if (isWideScreenWithTwoColumns() && !isTheater() && isActiveAndVisible) {
              //optional
              timeline.setTimeout(unlock, 80);
              switchTabActivity(null);
              ytBtnSetTheater();
            } else if (isActiveAndVisible) {
              timeline.setTimeout(unlock, 80);
              switchTabActivity(null);
            } else {
              let pInterval = 60;
              if (isChatExpand() && isWideScreenWithTwoColumns()) {
                ytBtnCollapseChat();
              } else if (isEngagementPanelExpanded() && isWideScreenWithTwoColumns()) {
                ytBtnCloseEngagementPanels();
              } else if (isWideScreenWithTwoColumns() && isTheater() && !isFullScreen()) {
                ytBtnCancelTheater();
              } else {
                pInterval = 20;
              }
              //console.log(8518)
              timeline.setTimeout(() => {
                timeline.setTimeout(makeBodyScroll, 20); // this is to make the image render

                timeline.setTimeout(() => {
                  let rightTabs = document.querySelector('#right-tabs');
                  if (!isWideScreenWithTwoColumns() && rightTabs && rightTabs.offsetTop > 0 && this.classList.contains('active')) {
                    let tabButtonBar = document.querySelector('#material-tabs');
                    let tabButtonBarHeight = tabButtonBar ? tabButtonBar.offsetHeight : 0;
                    window.scrollTo(0, rightTabs.offsetTop - tabButtonBarHeight);
                  }
                }, 60)
               // console.log(8519)

                timeline.setTimeout(unlock, 80)
                switchTabActivity(this)

              }, pInterval);
            }


          })

        })




      });
      /*

      $(materialTab).on("mousedown", ".font-size-btn", function(evt){

        evt.stopPropagation();
        evt.stopImmediatePropagation();

      });

      $(materialTab).on("pointerdown", ".font-size-btn", function(evt){

        evt.stopPropagation();
        evt.stopImmediatePropagation();

      });
      
      $(materialTab).on("mouseup", ".font-size-btn", function(evt){

        evt.stopPropagation();
        evt.stopImmediatePropagation();

      });

      $(materialTab).on("pointerup", ".font-size-btn", function(evt){

        evt.stopPropagation();
        evt.stopImmediatePropagation();

      });
      */

      function updateCSS_fontsize(){

        let store = getStore();
        
        let ytdFlexyElm = kRef(ytdFlexy);
        if(ytdFlexyElm){
          if(store['font-size-#tab-info'])
          ytdFlexyElm.style.setProperty('--ut2257-info', store['font-size-#tab-info'])
          if(store['font-size-#tab-comments'])
          ytdFlexyElm.style.setProperty('--ut2257-comments', store['font-size-#tab-comments'])
          if(store['font-size-#tab-videos'])
          ytdFlexyElm.style.setProperty('--ut2257-videos', store['font-size-#tab-videos'])
          if(store['font-size-#tab-list'])
          ytdFlexyElm.style.setProperty('--ut2257-list', store['font-size-#tab-list'])
        }

      }

      $(materialTab).on("click", ".font-size-btn", function(evt){

        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        let value = evt.target.matches('.font-size-plus')?1: evt.target.matches('.font-size-minus')?-1 :0;

        let active_tab_content = closestDOM.call(evt.target,'[userscript-tab-content]').getAttribute('userscript-tab-content'); 

        let store = getStore();
        let settingKey = `font-size-${active_tab_content}`
        if(!store[settingKey]) store[settingKey] = 1.0;
        if(value<0) store[settingKey] -= 0.05;
        else if(value>0) store[settingKey] += 0.05;
        if(store[settingKey]<0.1) store[settingKey] = 0.1;
        else if(store[settingKey]>10) store[settingKey] = 10.0;
        setStore(store);


        updateCSS_fontsize();


        //console.log(this.textContent)


      });

      updateCSS_fontsize();



    }

  }


  // ---------------------------------------------------------------------------------------------
  document.addEventListener("yt-navigate-finish", onNavigationEnd)
  //yt-navigate-redirect
  //"yt-page-data-fetched"
  //yt-navigate-error
  //yt-navigate-start
  //yt-page-manager-navigate-start
  //"yt-navigate"
  //"yt-navigate-cache

  document.addEventListener("yt-navigate-cache",()=>{
    console.log('yt-navigate-cache')
  })
  document.addEventListener("yt-navigate-redirect",()=>{
    console.log('yt-navigate-redirect')
  })

  function onReady(){
    //might be earlier than yt-navigation-finish
    console.log('html-onReady')
    if(location.pathname=='/watch') script_inject_js1.inject();
  }

  if(document.readyState!=='loading'){
    onReady();
  }else{
    document.addEventListener('DOMContentLoaded', onReady)
  }

  function forceConfig(){
    
    let trial = false;
    
/*
    let f=()=>{
      if(trial) return;
      let b = true;
      try{
        document.dispatchEvent(new CustomEvent("me-func"))
        window.yt.config_.EXPERIMENT_FLAGS.kevlar_watch_metadata_refresh=true
      }catch(e){
        b=false;
      }
      if(b) trial = true;
    }
    f();
    requestAnimationFrame(f)
    setTimeout(f,30)
    setTimeout(f,300)
*/
    
    
  }

  document.addEventListener("yt-navigate-start",()=>{
    console.log('yt-navigate-start') // not always trigger before navigate-end
    
    no_fix_contents_until = 0;
    no_fix_playlist_until = 0;

    script_inject_js1.inject();
    forceConfig();
  })

  document.addEventListener("yt-page-manager-navigate-start",()=>{
    console.log('yt-page-manager-navigate-start')
    forceConfig();
  })


  document.addEventListener("loadstart", (evt) => {
    if (!evt || !evt.target || evt.target.nodeName !== "VIDEO") return;
    let elm = evt.target;
    if (!elm.matches('#player video, #movie_player video, video[tabview-mainvideo]')) return;

    
    mtc_nr_comments= Math.max(mtc_nr_comments, Date.now()+2870)
    //console.log(7055)

    let src = elm.src;
    if (src !== lastVideoURL) {
      lastVideoURL = elm.src;
      elm.setAttribute('tabview-mainvideo', ''); // mainly for mini playing
      
      regularCheckFull()

    }

  }, true)

  // ---------------------------------------------------------------------------------------------

  let scrolling_lastD = 0;

  const singleColumnScrolling = function(/** @type {boolean} */  scrolling_lastF) {
    
    if (!scriptEnable || deferredVarYTDHidden) return;

    let pageY = scrollY;
    if (pageY < 10 && scrolling_lastD === 0 && !scrolling_lastF) return;

    let targetElm, header, navElm;

    Promise.resolve().then(() => {

      targetElm = document.querySelector("#right-tabs");
      if (!targetElm) return;
      header = querySelectorFromAnchor.call(targetElm,"header");
      if (!header) return;
      navElm = document.querySelector('#masthead-container, #masthead')
      if (!navElm) return;
      let navHeight = navElm ? navElm.offsetHeight : 0

      let elmY = targetElm.offsetTop

      let xyz = [elmY + navHeight, pageY, elmY - navHeight]

      let xyStatus = 0
      if (xyz[1] < xyz[2] && xyz[2] < xyz[0]) {
        // 1
        xyStatus = 1
      }

      if (xyz[0] > xyz[1] && xyz[1] > xyz[2]) {

        //2
        xyStatus = 2

      }

      if (xyz[2] < xyz[0] && xyz[0] < xyz[1]) {
        // 3

        xyStatus = 3


      }

      return xyStatus;

    }).then((xyStatus) => {

      if ((xyStatus == 2 || xyStatus == 3) && (scrolling_lastD === 0 || scrolling_lastF)) {
        scrolling_lastD = 1;
        let {
          offsetHeight
        } = header
        let {
          offsetWidth
        } = targetElm

        targetElm.style.setProperty("--userscript-sticky-width", offsetWidth + 'px')
        targetElm.style.setProperty("--userscript-sticky", offsetHeight + 'px')

        wAttr(targetElm, 'userscript-sticky', true);

      } else if ((xyStatus == 1) && (scrolling_lastD === 1 || scrolling_lastF)) {
        scrolling_lastD = 0;

        wAttr(targetElm, 'userscript-sticky', false);
      }


      targetElm = null;
      header = null;
      navElm = null;

    });

  };

  window.addEventListener("scroll", function() {
    singleColumnScrolling(false)
  }, {
    capture: false,
    passive: true
  })

  let lastResizeAt = 0;
  window.addEventListener('resize', function() {

    if (!scriptEnable) return;
    if (deferredVarYTDHidden) return;
    lastResizeAt = Date.now();

    requestAnimationFrame(() => {
      singleColumnScrolling(true)
    })

  }, {
    capture: false,
    passive: true
  })



  
  let hist = null
  const getHistState = (history)=>`${history.length}|${history.state?history.state.entryTime:null}`;
  function newVideoPageCheck(){
    let hState = getHistState(history)
    if(hist!==hState) {
      hist=hState;
      if(scriptEnable){
        //scriptEnable = false;
        let callTimeout = !newVideoPage.entryTime
        newVideoPage.entryTime = 1
        if(callTimeout) setTimeout(newVideoPage,0)
        
      }
      return true;
    }
  }
  function newVideoPage(){
    newVideoPage.entryTime = 0;

    console.log('newVideoPage')
    
    time_preventImmHidden = Date.now()+800;
    
    
    //console.log('newVideoPage-', 150, location.href)

    let ytdFlexyElm = kRef(ytdFlexy);
    if(!ytdFlexyElm) return;

    timeline.reset();
    mtc_cid=0;
    cid_render_section=0;
    runAfterExpandChat.cid_chatFrameCheck1=0;
    runAfterExpandChat.cid_chatFrameCheck2=0;
    layoutStatusMutex = new Mutex();

    //console.log('newVideoPage-', 350, location.href)
    
    let flag1= /^https?\:\/\/(\w+\.)*youtube\.com\/watch\?(\w+\=[^\/\?\&]+\&|\w+\=?\&)*v=[\w\-\_]+/.test(location.href)
    let tf = ()=>{

      let isFlexyHidden = (deferredVarYTDHidden = ytdFlexyElm.hasAttribute('hidden'));

      let flag2 = !isFlexyHidden;  // flexy is visible

      if(flag1^flag2) return timeline.setTimeout(tf,7); else funcVisibleWatch();

      tf= null;
      funcVisibleWatch = null;
      ytdFlexyElm=null

    }

    let funcVisibleWatch = ()=>{

      //(flexy is visible and watch video page)  ||  (flexy is inivisible and it is not watch video page)
      
      //scriptEnable = true;

      let isFlexyHidden = (deferredVarYTDHidden = ytdFlexyElm.hasAttribute('hidden'));
      ytdFlexyHiddenCheckBasic(ytdFlexyElm)

      if(!isFlexyHidden) {

        //(flexy is visible and watch video page) 

        scriptEnable = true;

        mtf_forceCheckLiveVideo_disable = 0;
        mtc_nr_comments= Math.max(mtc_nr_comments, Date.now()+2870)
        //console.log(7056)

        sect_lastUpdate = 0;
        timeline.clearTimeout(cld_comments_nothingFound);
        cld_comments_nothingFound=0;
        if(pendingOne){
          // reset pendingOne = false if the element is already removed.
          pendingOne = document.querySelectorAll(`ytd-watch-flexy ytd-comments#comments [tabview-cache-time]`).length>1;
        }

        /*
        // try to omit in 2.5.x
        timeline.setTimeout(()=>{
          Q.mutationTarget=null;
          console.log(87101)
          FP.mtf_attrComments()
        },2870)
        */
    
        if(pageInit_attrComments) hookSection();





        
        let new_layoutStatus = wls.layoutStatus 

        const new_isExpandedChat = !(new_layoutStatus & LAYOUT_CHATROOM_COLLASPED) && (new_layoutStatus & LAYOUT_CHATROOM)
        const new_isCollaspedChat = (new_layoutStatus & LAYOUT_CHATROOM_COLLASPED) && (new_layoutStatus & LAYOUT_CHATROOM)
    
        const new_isTwoColumns = new_layoutStatus & LAYOUT_TWO_COLUMNS;
        const new_isTheater = new_layoutStatus & LAYOUT_THEATER;
        const new_isTabExpanded = new_layoutStatus & LAYOUT_TAB_EXPANDED;
        const new_isFullScreen = new_layoutStatus & LAYOUT_FULLSCREEN;
        const new_isExpandEPanel = new_layoutStatus & LAYOUT_ENGAGEMENT_PANEL_EXPAND;
 
        if( ytdFlexyElm.getAttribute('tabview-selection')==='' && new_isTwoColumns && !new_isTheater && !new_isTabExpanded && !new_isFullScreen && !new_isExpandEPanel && !new_isExpandedChat ){
          // e.g. engage panel removed after miniview and change video
          setToActiveTab();
        }else if(new_isExpandEPanel && querySelectorAllFromAnchor.call(ytdFlexyElm,'ytd-engagement-panel-section-list-renderer[visibility="ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"]').length===0){
          wls.layoutStatus = new_layoutStatus & (~LAYOUT_ENGAGEMENT_PANEL_EXPAND)
        }

        
        regularCheckFull()

      }

      //no_fix_contents_until = 0;
      //no_fix_playlist_until = 0;
      //scriptEnable = true;
      //regularCheck(1,0,null); // mutation happens when the page is not ready; call again as the page is ready.



      

    }
    

    
    tf();
    


  }



  function browserHistoryState(){
    let maxCount = 5

    if (!scriptEnable) return;
    
    let ytdFlexyElm = kRef(ytdFlexy);
    if(!ytdFlexyElm) return;

    let cid = timeline.setInterval(function(){
      if(newVideoPageCheck()){
        timeline.clearInterval(cid);
      }
      if(--maxCount===0) timeline.clearInterval(cid);
    },7)

  }


  window.addEventListener('hashchange', function() {
    if (!scriptEnable) return;
    console.log('hashchange');
    browserHistoryState();
  }, { capture: true })

  window.addEventListener('popstate', function() {
    if (!scriptEnable) return;
    console.log('popstate');
    browserHistoryState();
  }, { capture: true })


  // function clearMutationObserver(o, key) {
  //   if (o[key]) {
  //     o[key].takeRecords();
  //     o[key].disconnect();
  //     o[key] = null;
  //     return true;
  //   }
  // }

  // function initMutationObserver(o, key, callback) {
  //   clearMutationObserver(o, key);
  //   const mto = new MutationObserver(callback);
  //   o[key] = mto;
  //   return mto;
  // }
  // function initMutationObserver2(o, key, mtoFunc) {
  //   clearMutationObserver(o, key);
  //   const mto = mtoFunc();
  //   o[key] = mto;
  //   return mto;
  // }

  document.addEventListener('wheel', function(evt) {

    if (!scriptEnable) return;
    const displayedPlaylist_element = kRef(displayedPlaylist);
    if (displayedPlaylist_element && elementContains.call(displayedPlaylist_element, evt.target)) {
      evt.stopPropagation();
      evt.stopImmediatePropagation();
    }
  }, { capture: true, passive: true });


  function setVideosTwoColumns(/** @type {number} */ flag, /** @type {boolean} */ bool) {

    //two columns to one column

    /*
        [placeholder-videos] ytd-watch-next-secondary-results-renderer.style-scope.ytd-watch-flexy

        is-two-columns =""  => no is-two-columns
        
        
        
        [placeholder-videos] tp-yt-paper-spinner#spinner.style-scope.ytd-continuation-item-renderer
        
        no hidden => hidden =""
        
        
        [placeholder-videos] div#button.style-scope.ytd-continuation-item-renderer
        
        
        hidden ="" => no hidden
        

        */

    let cssSelector1 = '[placeholder-videos] ytd-watch-next-secondary-results-renderer.style-scope.ytd-watch-flexy'

    let cssSelector2 = '[placeholder-videos] tp-yt-paper-spinner#spinner.style-scope.ytd-continuation-item-renderer'

    let cssSelector3 = '[placeholder-videos] div#button.style-scope.ytd-continuation-item-renderer'

    let res = {}
    if (flag & 1) {
      res.m1 = document.querySelector(cssSelector1)
      if (res.m1) wAttr(res.m1, 'is-two-columns', bool ? '' : false);
    }

    if (flag & 2) {
      res.m2 = document.querySelector(cssSelector2)
      if (res.m2) wAttr(res.m2, 'hidden', bool ? false : '');
    }

    if (flag & 4) {
      res.m3 = document.querySelector(cssSelector3)
      if (res.m3) wAttr(res.m3, 'hidden', bool ? '' : false);
    }


    return res




  }

  let lastScrollFetch = 0;
  // function isScrolledToEnd(){
  //     return (window.innerHeight + window.pageYOffset) >= document.scrollingElement.scrollHeight - 2;
  // }
  let lastOffsetTop = 0;
  window.addEventListener('scroll', function(evt) {

    //console.log(evt.target)

    if (!scriptEnable) return;


    if (!kRef(scrollingVideosList)) return;
    if (videoListBeforeSearch) return;



    let visibleHeight = document.scrollingElement.clientHeight;
    let totalHeight = document.scrollingElement.scrollHeight;

    if (totalHeight < visibleHeight * 1.5) return; // filter out two column view;

    let z = window.pageYOffset + visibleHeight;
    let h_advanced = totalHeight - (visibleHeight > 5 * 40 ? visibleHeight * 0.5 : 40);



    if (z > h_advanced && !isWideScreenWithTwoColumns()) {

      let ct = Date.now();
      if (ct - lastScrollFetch < 500) return; //prevent continuous calling

      lastScrollFetch = ct;

      let res = setVideosTwoColumns(2 | 4, true)
      if (res.m3 && res.m2) {

        //wait for DOM change, just in case
        requestAnimationFrame(() => {
          let { offsetTop } = res.m2 // as visibility of m2 & m3 switched.

          if (offsetTop - lastOffsetTop < 40) return; // in case bug, or repeating calling.  // the next button shall below the this button 
          lastOffsetTop = offsetTop

          res.m2.parentNode.dispatchEvent(new Event('yt-service-request-sent-button-renderer'))

          res = null
        })

      } else {

        res = null
      }


    }




  }, { passive: true })

  let sect_lastUpdate = 0;

  let sect_holder = null;
  let sect_hText = null;
  let sect_hTime = 0;

  let pendingOne = false;
  let mtf_forceCheckLiveVideo_disable = 0;

  let storeLastPanel = null;

  /** @type {boolean | null} */
  let deferredVarYTDHidden = null;
  let scheduledCommentRefresh = false;

  let pageInit_attrComments = false;



  let mgChatFrame = {
    setVar(elm) {
      mgChatFrame.kVar = mWeakRef(elm)
    },
    getVar() {
      return kRef(mgChatFrame.kVar)
    },
    inPage() {
      let elm = mgChatFrame.getVar();
      if (!elm) return false;
      let ytdFlexyElm = kRef(ytdFlexy);
      if(!ytdFlexyElm) return false;
      return elementContains.call(ytdFlexyElm, elm)
    }
  };

  const timeline = {
    // after initialized (initObserver)
    cn1:{},
    cn2:{},
    setTimeout( /** @type {TimerHandler} */ f,/** @type {number} */ d){
      let cid = setTimeout(f,d)
      timeline.cn1[cid]=true
      return cid;
    },
    clearTimeout(/** @type {number} */ cid){
      timeline.cn1[cid]=false; return clearTimeout(cid)
    },
    setInterval(/** @type {TimerHandler} */ f,/** @type {number} */ d){
      let cid = setInterval(f,d);
      timeline.cn2[cid]=true
      return cid;
    },
    clearInterval(/** @type {number} */ cid){
      timeline.cn2[cid]=false; return clearInterval(cid)
    },
    reset(){
      for(let cid in timeline.cn1) timeline.cn1[cid] && clearTimeout(cid)
      for(let cid in timeline.cn2) timeline.cn2[cid] && clearInterval(cid)
      timeline.cn1={}
      timeline.cn2={}
    }
  }

  class AttributeMutationObserver extends MutationObserver {
    constructor(flist){
      super((mutations, observer)=>{
        for(const mutation of mutations){
          if (mutation.type === 'attributes') {
            this.checker(mutation.target, mutation.attributeName)
          }
        }
      })
      this.flist=flist;
      this.res={}
    }
    
    takeRecords(){
      super.takeRecords();
    }
    disconnect(){
      this._target = null;
      super.disconnect();
    }
    observe(/** @type {Node} */ target){
      if(this._target) return; 
      //console.log(123124, target)
      this._target = mWeakRef(target);
      
      //console.log(123125, kRef(this._target))
      const options = {
        attributes: true,
        attributeFilter: Object.keys(this.flist),
        //attributeFilter: [ "status", "username" ],
        attributeOldValue: true
      }
      super.observe(target, options)
    }
    checker(/** @type {Node} */ target,/** @type {string} */ attributeName){
      let nv = target.getAttribute(attributeName);
      if(this.res[attributeName]!==nv){
        this.res[attributeName] = nv
        let f = this.flist[attributeName];
        if(f) f(attributeName, nv);

      }
    }
    check(delay = 0){
      setTimeout(()=>{
        let target = kRef(this._target)
        if(target!==null){
          for(const key of Object.keys(this.flist)){
            this.checker(target,key)
          }
        }else{
          console.log('target is null') //disconnected??
        }
        target = null;
      },delay)
    }
  } 

  function goYoutubeGeniusLyrics(){

    setTimeout(function $f(){

      if(!document.documentElement.hasAttribute('w-engagement-panel-genius-lyrics')) return setTimeout($f,100)

      document.documentElement.dispatchEvent(new CustomEvent('engagement-panel-genius-lyrics'))


    },100)



  }


  /*

  To be implement: timeline

  timeline.setTimeout
  timeline.clearTimeout
  timeline.setInterval
  timeline.clearInterval

  */



  //Object.keys($0).filter(key=>!(key in $0.constructor.prototype))

  //Object.getOwnPropertyNames(window).filter(k=>k.startsWith('HTML'))
  //Object.getOwnPropertyNames(window).filter(k=>k.startsWith('HTML')).filter(k=>$0 instanceof window[k])


  /* --------------------------- browser's bug in -webkit-box ----------------------------------------- */

  /*
   fix bug for comment section - version 1.8.7 
  This issue is the bug in browser's rendering
   I guess, this is due to the lines clamp with display:-webkit-box 
   use stupid coding to let it re-render when its content become visible
   
  /*

  ytd-expander[should-use-number-of-lines][collapsed] > #content.ytd-expander {
      color: var(--yt-spec-text-primary);
      display: -webkit-box;
      overflow: hidden;
      max-height: none;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: var(--ytd-expander-max-lines, 4);
  }

  // v1.8.36 imposed a effective solution for fixing this bug

  */

  /* --------------------------- browser's bug in -webkit-box ----------------------------------------- */


  /**
   * 


f.initChildrenObserver=function(){var a=this;this.observer=new MutationObserver(function(){return a.childrenChanged()});
this.observer.observe(this.$.content,{subtree:!0,childList:!0,attributes:!0});this.childrenChanged()};
f.childrenChanged=function(){var a=this;this.alwaysToggleable?this.canToggle=this.alwaysToggleable:this.canToggleJobId||(this.canToggleJobId=window.requestAnimationFrame(function(){$h(function(){a.canToggleJobId=0;a.calculateCanCollapse()})}))};


f.onIronResize=function(){this.recomputeOnResize&&this.childrenChanged()};


onButtonClick_:function(){this.fire("yt-close-upsell-dialog")},
computeHasHeader_:function(a){return!!a.headerBackgroundImage}});var geb;var heb;var ieb;var jeb;var xI=function(){var a=L.apply(this,arguments)||this;a.alignAuto=!1;a.collapsed=!0;a.isToggled=!1;a.alwaysCollapsed=!1;a.canToggle=!0;a.collapsedHeight=80;a.disableToggle=!1;a.alwaysToggleable=!1;a.reversed=!1;a.shouldUseNumberOfLines=!1;a.recomputeOnResize=!1;a.canToggleJobId=0;return a};
n(xI,L);f=xI.prototype;f.alwaysToggleableChanged=function(){this.alwaysToggleable&&(this.canToggle=!0)};


f.calculateCanCollapse=function(){this.canToggle=this.shouldUseNumberOfLines?this.alwaysToggleable||this.$.content.offsetHeight<this.$.content.scrollHeight:this.alwaysToggleable||this.$.content.scrollHeight>this.collapsedHeight};
f.detachObserver=function(){this.observer&&this.observer.disconnect()};

   * 
   * 
   * 
   */




})();