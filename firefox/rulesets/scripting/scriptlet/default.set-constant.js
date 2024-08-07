/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["attachEvent","trueFunc"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["spoof","noopFunc"],["adBlockerDetected","undefined"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["flashvars.popunder_url",""],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["importFAB","undefined"],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["adSettings","[]"],["one_time","1"],["consentGiven","true"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["karte3","18"],["protection","noopFunc"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["checkAdsStatus","noopFunc"],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["cabdSettings","undefined"],["td_ad_background_click_link"],["document.hasFocus","trueFunc"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["private","false"],["showadas","true"],["iktimer","0"],["aSl.gcd","0"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["showax","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["D4zz","noopFunc"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["count","1"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["tOS1","150"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["checkAdBlocker","noopFunc"],["PlayerConfig.config.CustomAdSetting","[]"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["fapit.check","noopFunc"],["Object.prototype.urlCheck","noopFunc"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["Taplytics","{}"],["Taplytics.featureFlagEnabled","noopFunc"],["Taplytics.runningExperiments","noopFunc"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["SalesforceInteractions","{}"],["SalesforceInteractions.CatalogObjectInteractionName"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["supportedBrowsers",""],["supportedTimezoness","[]"],["userTimezoneOffset",""],["ads","yes"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,582]],["t-online.de",5],["whatfinger.com",6],["timesofindia.indiatimes.com",7],["economictimes.indiatimes.com",8],["userscloud.com",9],["motherless.com",10],["sueddeutsche.de",11],["watchanimesub.net",12],["wco.tv",12],["wcoanimesub.tv",12],["wcoforever.net",12],["freeviewmovies.com",12],["filehorse.com",12],["guidetnt.com",12],["sp-today.com",12],["linkvertise.com",12],["textbin.net",12],["eropaste.net",12],["pastebr.xyz",12],["getpaste.link",12],["sharetext.me",12],["note.sieuthuthuat.com",12],["elcriticodelatele.com",[12,254]],["gadgets.es",[12,254]],["amateurporn.co",[12,105]],["wiwo.de",13],["masteranime.tv",14],["alphaporno.com",[15,436]],["porngem.com",15],["uploadbank.com",15],["shortit.pw",[15,109]],["familyporn.tv",15],["cloudemb.com",[15,358]],["sbplay1.com",15],["id45.cyou",15],["85tube.com",[15,90]],["k1nk.co",15],["watchasians.cc",15],["soltoshindo.com",15],["dronedj.com",17],["nolive.me",18],["player.glomex.com",19],["merkur.de",19],["tz.de",19],["hotpornfile.org",22],["player.tabooporns.com",22],["x69.ovh",22],["wiztube.xyz",22],["netu.frembed.fun",22],["multiup.us",22],["rpdrlatino.live",22],["peliculas8k.com",[22,23]],["video.q34r.org",22],["69x.online",22],["czxxx.org",22],["netu.ac",22],["dirtyvideo.fun",23],["adbull.org",24],["mitly.us",24],["linkrex.net",24],["linx.cc",24],["oke.io",24],["dz4link.com",24],["linclik.com",24],["shrt10.com",24],["loptelink.com",24],["cut-fly.com",24],["linkfinal.com",24],["payskip.org",24],["cutpaid.com",24],["forexmab.com",24],["linkjust.com",24],["linkszia.co",24],["leechpremium.link",24],["icutlink.com",[24,129]],["stfly.me",24],["oncehelp.com",24],["rgl.vn",24],["reqlinks.net",24],["bitlk.com",24],["qlinks.eu",24],["link.3dmili.com",24],["short-fly.com",24],["foxseotools.com",24],["pngit.live",24],["link.turkdown.com",24],["urlty.com",24],["7r6.com",24],["oko.sh",24],["ckk.ai",24],["fc.lc",24],["fstore.biz",24],["cuts-url.com",24],["eio.io",24],["exe.app",24],["exee.io",24],["exey.io",24],["skincarie.com",24],["exeo.app",24],["coinlyhub.com",[24,207]],["adsafelink.com",24],["aii.sh",24],["cybertechng.com",[24,220]],["owllink.net",24],["cutdl.xyz",24],["iir.ai",24],["shorteet.com",[24,239]],["sekilastekno.com",24],["smoner.com",24],["xpshort.com",24],["upshrink.com",24],["enit.in",[24,235]],["ez4short.com",24],["easysky.in",24],["veganab.co",24],["adrinolinks.in",24],["go.bloggingaro.com",24],["go.gyanitheme.com",24],["go.theforyou.in",24],["go.hipsonyc.com",24],["birdurls.com",24],["try2link.com",24],["jameeltips.us",24],["gainl.ink",24],["promo-visits.site",24],["satoshi-win.xyz",[24,285]],["shorterall.com",24],["encurtandourl.com",24],["forextrader.site",24],["postazap.com",24],["cety.app",24],["exego.app",[24,281]],["cutlink.net",24],["cutsy.net",24],["cutyurls.com",24],["cutty.app",24],["cutnet.net",24],["tinys.click",[24,220]],["cpm.icu",24],["panyshort.link",24],["enagato.com",24],["pandaznetwork.com",24],["tii.la",24],["oei.la",24],["lnbz.la",[24,235]],["recipestutorials.com",24],["shrinkforearn.in",24],["techyuth.xyz",24],["oii.io",24],["du-link.in",24],["atglinks.com",24],["thotpacks.xyz",24],["megaurl.in",24],["megafly.in",24],["simana.online",24],["linksly.co",24],["pkr.pw",24],["imagenesderopaparaperros.com",24],["shortenbuddy.com",24],["gibit.xyz",24],["apksvip.com",24],["4cash.me",24],["namaidani.com",24],["teknomuda.com",24],["illink.net",24],["miuiku.com",24],["yourtechnology.online",24],["savelink.site",24],["apkshrt.com",24],["srts.me",24],["kutmoney.com",24],["kutt.io",24],["sanoybonito.club",24],["samaa-pro.com",24],["miklpro.com",24],["modapk.link",24],["1shorten.com",24],["ccurl.net",24],["st23q.com",24],["beautyram.info",24],["viraloc.com",24],["galaxy-link.space",24],["linkpoi.me",24],["usdshort.com",24],["bitcoinly.in",24],["menjelajahi.com",24],["pewgame.com",24],["yxoshort.com",24],["1link.vip",24],["haonguyen.top",24],["claimfreebits.com",24],["crazyblog.in",24],["gtlink.co",24],["link.tokenoto.com",24],["cutearn.net",24],["rshrt.com",24],["short.palmeratv.com",24],["filezipa.com",24],["dz-linkk.com",24],["theblissempire.com",24],["finanzas-vida.com",24],["adurly.cc",24],["pix4link.com",24],["paid4.link",24],["link.asiaon.top",24],["go.gets4link.com",24],["download.sharenulled.net",24],["beingtek.com",24],["shorturl.unityassets4free.com",24],["disheye.com",24],["techymedies.com",24],["techysuccess.com",24],["za.gl",[24,147]],["download.baominh.tech",24],["bblink.com",24],["linkbr.xyz",24],["myad.biz",24],["swzz.xyz",24],["vevioz.com",24],["charexempire.com",24],["clk.asia",24],["egfly.xyz",24],["linka.click",24],["sturls.com",24],["myshrinker.com",24],["go.adinsurance.xyz",24],["dash-free.com",[24,220]],["snowurl.com",[24,220]],["netfile.cc",24],["link.insurglobal.xyz",24],["theconomy.me",24],["rocklink.in",24],["adinsurance.xyz",24],["insurglobal.xyz",24],["techgeek.digital",24],["download3s.net",24],["shortx.net",24],["musicc.xyz",24],["shortawy.com",24],["tlin.me",24],["apprepack.com",24],["up-load.one",24],["zuba.link",24],["news.speedynews.xyz",24],["golink.xaydungplus.com",24],["bestcash2020.com",24],["hoxiin.com",24],["technemo.xyz",24],["go.linkbnao.com",24],["link-yz.com",24],["paylinnk.com",24],["thizissam.in",24],["ier.ai",24],["bloggertheme.xyz",24],["adslink.pw",24],["novelssites.com",24],["links.medipost.org",24],["faucetcrypto.net",24],["short.freeltc.top",24],["trxking.xyz",24],["weadown.com",24],["m.bloggingguidance.com",24],["blog.onroid.com",24],["link.codevn.net",24],["upfilesurls.com",24],["shareus.site",24],["link4rev.site",24],["bloginguru.xyz",24],["celinks.net",24],["c2g.at",24],["shortzu.icu",24],["bitcosite.com",[24,449]],["cryptosh.pro",24],["sigmalinks.in",24],["link68.net",24],["traffic123.net",24],["windowslite.net",[24,220]],["coinsl.click",24],["exalink.fun",24],["viewfr.com",24],["cl1ca.com",24],["4br.me",24],["fir3.net",24],["kiddyshort.com",24],["watchmygf.me",[25,53]],["camwhorez.tv",[25,38,89,90]],["cambay.tv",[25,55,89,105,122,124,125,126]],["fpo.xxx",[25,55]],["sexemix.com",25],["heavyfetish.com",[25,514]],["you-porn.com",27],["youporngay.com",27],["youpornru.com",27],["9908ww.com",27],["adelaidepawnbroker.com",27],["bztube.com",27],["hotovs.com",27],["insuredhome.org",27],["nudegista.com",27],["pornluck.com",27],["vidd.se",27],["pornhub.com",27],["pornerbros.com",28],["freep.com",28],["porn.com",31],["tune.pk",32],["noticias.gospelmais.com.br",33],["techperiod.com",33],["jacquieetmicheltv.net",[34,35]],["illicoporno.com",34],["lavoixdux.com",34],["tonpornodujour.com",34],["jacquieetmichel.net",34],["swame.com",34],["vosfemmes.com",34],["voyeurfrance.net",34],["viki.com",[36,37]],["sleazyneasy.com",[38,39,40]],["smutr.com",[38,203]],["yourporngod.com",[38,39]],["javbangers.com",[38,328]],["camfox.com",38],["camthots.tv",[38,122]],["shegotass.info",38],["amateur8.com",38],["bigtitslust.com",38],["ebony8.com",38],["freeporn8.com",38],["lesbian8.com",38],["maturetubehere.com",38],["sortporn.com",38],["webcamvau.com",38],["motherporno.com",[38,39,55,124]],["tktube.com",38],["theporngod.com",[38,39]],["pornsocket.com",41],["luxuretv.com",42],["porndig.com",[43,44]],["webcheats.com.br",45],["ceesty.com",[46,47]],["gestyy.com",[46,47]],["corneey.com",47],["destyy.com",47],["festyy.com",47],["sh.st",47],["angrybirdsnest.com",48],["zrozz.com",48],["clix4btc.com",48],["4tests.com",48],["planet-explorers-isos.com",48],["business-standard.com",48],["goltelevision.com",48],["news-und-nachrichten.de",48],["laradiobbs.net",48],["urlaubspartner.net",48],["produktion.de",48],["cinemaxxl.de",48],["bladesalvador.com",48],["tempr.email",48],["katfile.com",48],["trust.zone",48],["cshort.org",48],["friendproject.net",48],["covrhub.com",48],["planetsuzy.org",49],["empflix.com",50],["freeplayervideo.com",51],["nazarickol.com",51],["player-cdn.com",51],["playhydrax.com",51],["apinchcaseation.com",51],["bigclatterhomesguideservice.com",51],["bradleyviewdoctor.com",51],["brookethoughi.com",51],["brucevotewithin.com",51],["cindyeyefinal.com",51],["denisegrowthwide.com",51],["edwardarriveoften.com",51],["graceaddresscommunity.com",51],["housecardsummerbutton.com",51],["jamesstartstudent.com",51],["jamiesamewalk.com",51],["jasonresponsemeasure.com",51],["jayservicestuff.com",51],["johntryopen.com",51],["kennethofficialitem.com",51],["loriwithinfamily.com",51],["lukecomparetwo.com",51],["markstyleall.com",51],["michaelapplysome.com",51],["morganoperationface.com",51],["nectareousoverelate.com",51],["paulkitchendark.com",51],["rebeccaneverbase.com",51],["roberteachfinal.com",51],["ryanagoinvolve.com",51],["sandrataxeight.com",51],["seanshowcould.com",51],["sethniceletter.com",51],["shannonpersonalcost.com",51],["sharonwhiledemocratic.com",51],["stevenimaginelittle.com",51],["strawberriesporail.com",51],["timberwoodanotia.com",51],["tinycat-voe-fashion.com",51],["troyyourlead.com",51],["uptodatefinishconference.com",51],["uptodatefinishconferenceroom.com",51],["vincentincludesuccessful.com",51],["voe.sx",51],["motphimtv.com",51],["rabbitstream.net",51],["projectfreetv.one",51],["filespace.com",52],["transparentcalifornia.com",53],["deepbrid.com",54],["submityourflicks.com",55],["3movs.com",55],["bravoerotica.net",[55,124]],["youx.xxx",55],["camclips.tv",[55,203]],["camflow.tv",[55,105,124,168,242]],["camhoes.tv",[55,105,122,124,168,242]],["xmegadrive.com",55],["xxxymovies.com",55],["xxxshake.com",55],["gayck.com",55],["xhand.com",[55,124]],["analdin.com",[55,124]],["webnovel.com",56],["videosgay.me",[57,58]],["oneupload.to",58],["wishfast.top",58],["schwaebische.de",59],["8tracks.com",60],["revealname.com",61],["fcportables.com",[62,63]],["golfchannel.com",65],["telemundodeportes.com",65],["stream.nbcsports.com",65],["gamcore.com",66],["porcore.com",66],["69games.xxx",66],["javmix.app",66],["tecknity.com",67],["haaretz.co.il",68],["haaretz.com",68],["hungama.com",68],["a-o.ninja",68],["anime-odcinki.pl",68],["kumpulmanga.org",68],["shortgoo.blogspot.com",68],["tonanmedia.my.id",[68,469]],["yurasu.xyz",68],["isekaipalace.com",68],["megadescarga.net",[69,70,71,72]],["megadescargas.net",[69,70,71,72]],["vikistream.com",73],["eplayer.click",[73,74]],["mega4upload.com",[74,80]],["ennovelas.com",[74,80]],["n-tv.de",75],["brigitte.de",76],["stern.de",76],["foxsports.com.au",77],["canberratimes.com.au",77],["thesimsresource.com",78],["bdnewszh.com",80],["streamservicehd.click",80],["timeforbitco.in",81],["worldofbitco.in",[81,92]],["weatherx.co.in",[81,92]],["getyourbitco.in",81],["sunbtc.space",81],["ctrl.blog",82],["sportlife.es",83],["finofilipino.org",84],["acortarm.xyz",85],["acortame.xyz",85],["speedtest.net",86],["mysflink.blogspot.com",87],["assia.tv",88],["assia4.com",88],["assia24.com",88],["cwtvembeds.com",[90,123]],["xmateur.com",[90,91,105]],["camlovers.tv",90],["porntn.com",90],["pornissimo.org",90],["sexcams-24.com",[90,105]],["watchporn.to",[90,105]],["camwhorez.video",90],["footstockings.com",[91,105]],["sbs.com.au",93],["ojogos.com.br",95],["powforums.com",96],["supforums.com",96],["studybullet.com",96],["usgamer.net",97],["recordonline.com",97],["freebitcoin.win",99],["e-monsite.com",99],["coindice.win",99],["sport-tv-guide.live",100],["temp-mails.com",101],["freiepresse.de",102],["investing.com",103],["camhub.cc",105],["love4porn.com",105],["thotvids.com",105],["watchmdh.to",105],["celebwhore.com",105],["cluset.com",105],["4kporn.xxx",105],["xhomealone.com",105],["lusttaboo.com",[105,399]],["hentai-moon.com",105],["mp3fiber.com",106],["chicoer.com",107],["dailybreeze.com",107],["dailybulletin.com",107],["dailynews.com",107],["delcotimes.com",107],["eastbaytimes.com",107],["macombdaily.com",107],["ocregister.com",107],["pasadenastarnews.com",107],["pe.com",107],["presstelegram.com",107],["redlandsdailyfacts.com",107],["reviewjournal.com",107],["santacruzsentinel.com",107],["saratogian.com",107],["sentinelandenterprise.com",107],["sgvtribune.com",107],["tampabay.com",107],["times-standard.com",107],["theoaklandpress.com",107],["trentonian.com",107],["twincities.com",107],["whittierdailynews.com",107],["bostonherald.com",107],["dailycamera.com",107],["sbsun.com",107],["dailydemocrat.com",107],["montereyherald.com",107],["orovillemr.com",107],["record-bee.com",107],["redbluffdailynews.com",107],["reporterherald.com",107],["thereporter.com",107],["timescall.com",107],["timesheraldonline.com",107],["ukiahdailyjournal.com",107],["dailylocal.com",107],["mercurynews.com",107],["suedkurier.de",108],["anysex.com",110],["vlist.se",111],["pornve.com",112],["coolrom.com.au",113],["pornohirsch.net",114],["marie-claire.es",115],["gamezhero.com",115],["flashgirlgames.com",115],["onlinesudoku.games",115],["mpg.football",115],["sssam.com",115],["globalnews.ca",116],["drinksmixer.com",117],["leitesculinaria.com",117],["fupa.net",118],["browardpalmbeach.com",119],["dallasobserver.com",119],["houstonpress.com",119],["miaminewtimes.com",119],["phoenixnewtimes.com",119],["westword.com",119],["nhentai.net",120],["nowtv.com.tr",121],["caminspector.net",122],["camwhoreshd.com",122],["camgoddess.tv",122],["gay4porn.com",124],["mypornhere.com",124],["mediapason.it",127],["linkspaid.com",127],["tuotromedico.com",127],["neoteo.com",127],["phoneswiki.com",127],["celebmix.com",127],["myneobuxportal.com",127],["oyungibi.com",127],["25yearslatersite.com",127],["jeshoots.com",128],["techhx.com",128],["karanapk.com",128],["flashplayer.fullstacks.net",130],["cloudapps.herokuapp.com",130],["texteditor.nsspot.net",130],["youfiles.herokuapp.com",130],["temp-mail.org",131],["playembed.xyz",132],["javhdporn.net",132],["javstream.top",132],["comnuan.com",133],["veedi.com",134],["battleboats.io",134],["fruitlab.com",135],["haddoz.net",135],["garoetpos.com",135],["stiletv.it",136],["hqtv.biz",138],["liveuamap.com",139],["muvibg.com",139],["audycje.tokfm.pl",140],["hulu.com",[141,142,143]],["shush.se",144],["emurom.net",145],["allkpop.com",146],["pickcrackpasswords.blogspot.com",148],["kfrfansub.com",149],["thuglink.com",149],["voipreview.org",149],["hanime.tv",150],["pogo.com",151],["cloudvideo.tv",152],["legionjuegos.org",153],["legionpeliculas.org",153],["legionprogramas.org",153],["16honeys.com",154],["elespanol.com",155],["remodelista.com",156],["coolmathgames.com",[157,158,159,535]],["audiofanzine.com",160],["noweconomy.live",162],["howifx.com",[162,235]],["vavada5com.com",162],["hitokin.net",163],["developerinsider.co",164],["ilprimatonazionale.it",165],["hotabis.com",165],["root-nation.com",165],["italpress.com",165],["airsoftmilsimnews.com",165],["artribune.com",165],["thehindu.com",166],["cambro.tv",[167,168]],["nibelungen-kurier.de",169],["adfoc.us",171],["odiaalbumsong.com",171],["djrkmusicjaunpur.in",171],["cmsarkariyojana.com",171],["apkeclipse.com",171],["decidewhy.com",171],["insurelist.online",171],["recipenames.com",171],["filmfliqz.co",171],["morestate.pro",171],["puresports.pro",171],["funkeykida.com",171],["funkeypagali.com",171],["careersides.com",171],["nayisahara.com",171],["wikifilmia.com",171],["infinityskull.com",171],["viewmyknowledge.com",171],["iisfvirtual.in",171],["starxinvestor.com",171],["myprivatejobs.com",[171,282]],["wikitraveltips.com",[171,282]],["amritadrino.com",[171,282]],["sahlmarketing.net",171],["filmypoints.in",171],["fitnessholic.net",171],["freshbhojpuri.com",171],["bgmi32bitapk.in",171],["bankshiksha.in",171],["earn.mpscstudyhub.com",171],["earn.quotesopia.com",171],["money.quotesopia.com",171],["best-mobilegames.com",171],["learn.moderngyan.com",171],["bharatsarkarijobalert.com",171],["techacode.com",171],["trickms.com",171],["azmath.info",171],["downfile.site",171],["downphanmem.com",171],["expertvn.com",171],["memangbau.com",171],["trangchu.news",171],["aztravels.net",171],["ielts-isa.edu.vn",171],["sptfy.be",171],["mcafee-com.com",[171,281]],["pianetamountainbike.it",172],["barchart.com",173],["modelisme.com",174],["parasportontario.ca",174],["prescottenews.com",174],["nrj-play.fr",175],["oeffentlicher-dienst.info",176],["hackingwithreact.com",177],["gutekueche.at",178],["eplfootballmatch.com",179],["peekvids.com",180],["playvids.com",180],["pornflip.com",180],["redensarten-index.de",181],["vw-page.com",182],["viz.com",[183,184]],["queenfaucet.website",185],["0rechner.de",186],["configspc.com",187],["xopenload.me",187],["uptobox.com",187],["uptostream.com",187],["onepiece-tube.com",188],["japgay.com",189],["mega-debrid.eu",190],["dreamdth.com",191],["diaridegirona.cat",193],["diariodeibiza.es",193],["diariodemallorca.es",193],["diarioinformacion.com",193],["eldia.es",193],["emporda.info",193],["farodevigo.es",193],["laopinioncoruna.es",193],["laopiniondemalaga.es",193],["laopiniondemurcia.es",193],["laopiniondezamora.es",193],["laprovincia.es",193],["levante-emv.com",193],["mallorcazeitung.es",193],["regio7.cat",193],["superdeporte.es",193],["playpaste.com",194],["player.rtl2.de",195],["freetutorialsus.com",196],["vidlii.com",[196,212]],["iammagnus.com",196],["dailyvideoreports.net",196],["unityassets4free.com",196],["cnbc.com",197],["puzzles.msn.com",198],["metro.us",198],["newsobserver.com",198],["arkadiumhosted.com",198],["firefaucet.win",200],["55k.io",201],["filelions.online",201],["stmruby.com",201],["direct-link.net",202],["direkt-wissen.com",202],["link-to.net",202],["fullhdxxx.com",204],["pornclassic.tube",205],["tubepornclassic.com",205],["etonline.com",206],["creatur.io",206],["drphil.com",206],["urbanmilwaukee.com",206],["ontiva.com",206],["hideandseek.world",206],["myabandonware.com",206],["kendam.com",206],["wttw.com",206],["synonyms.com",206],["definitions.net",206],["hostmath.com",206],["camvideoshub.com",206],["minhaconexao.com.br",206],["home-made-videos.com",208],["pxrnxx.xyz",208],["amateur-couples.com",208],["slutdump.com",208],["produsat.com",210],["12thman.com",212],["acusports.com",212],["atlantic10.com",212],["auburntigers.com",212],["baylorbears.com",212],["bceagles.com",212],["bgsufalcons.com",212],["big12sports.com",212],["bigten.org",212],["bradleybraves.com",212],["butlersports.com",212],["cmumavericks.com",212],["conferenceusa.com",212],["cyclones.com",212],["dartmouthsports.com",212],["daytonflyers.com",212],["dbupatriots.com",212],["dbusports.com",212],["denverpioneers.com",212],["fduknights.com",212],["fgcuathletics.com",212],["fightinghawks.com",212],["fightingillini.com",212],["floridagators.com",212],["friars.com",212],["friscofighters.com",212],["gamecocksonline.com",212],["goarmywestpoint.com",212],["gobison.com",212],["goblueraiders.com",212],["gobobcats.com",212],["gocards.com",212],["gocreighton.com",212],["godeacs.com",212],["goexplorers.com",212],["goetbutigers.com",212],["gofrogs.com",212],["gogriffs.com",212],["gogriz.com",212],["golobos.com",212],["gomarquette.com",212],["gopack.com",212],["gophersports.com",212],["goprincetontigers.com",212],["gopsusports.com",212],["goracers.com",212],["goshockers.com",212],["goterriers.com",212],["gotigersgo.com",212],["gousfbulls.com",212],["govandals.com",212],["gowyo.com",212],["goxavier.com",212],["gozags.com",212],["gozips.com",212],["griffinathletics.com",212],["guhoyas.com",212],["gwusports.com",212],["hailstate.com",212],["hamptonpirates.com",212],["hawaiiathletics.com",212],["hokiesports.com",212],["huskers.com",212],["icgaels.com",212],["iuhoosiers.com",212],["jsugamecocksports.com",212],["longbeachstate.com",212],["loyolaramblers.com",212],["lrtrojans.com",212],["lsusports.net",212],["morrisvillemustangs.com",212],["msuspartans.com",212],["muleriderathletics.com",212],["mutigers.com",212],["navysports.com",212],["nevadawolfpack.com",212],["niuhuskies.com",212],["nkunorse.com",212],["nuhuskies.com",212],["nusports.com",212],["okstate.com",212],["olemisssports.com",212],["omavs.com",212],["ovcsports.com",212],["owlsports.com",212],["purduesports.com",212],["redstormsports.com",212],["richmondspiders.com",212],["sfajacks.com",212],["shupirates.com",212],["siusalukis.com",212],["smcgaels.com",212],["smumustangs.com",212],["soconsports.com",212],["soonersports.com",212],["themw.com",212],["tulsahurricane.com",212],["txst.com",212],["txstatebobcats.com",212],["ubbulls.com",212],["ucfknights.com",212],["ucirvinesports.com",212],["uconnhuskies.com",212],["uhcougars.com",212],["uicflames.com",212],["umterps.com",212],["uncwsports.com",212],["unipanthers.com",212],["unlvrebels.com",212],["uoflsports.com",212],["usdtoreros.com",212],["utahstateaggies.com",212],["utepathletics.com",212],["utrockets.com",212],["uvmathletics.com",212],["uwbadgers.com",212],["villanova.com",212],["wkusports.com",212],["wmubroncos.com",212],["woffordterriers.com",212],["1pack1goal.com",212],["bcuathletics.com",212],["bubraves.com",212],["goblackbears.com",212],["golightsgo.com",212],["gomcpanthers.com",212],["goutsa.com",212],["mercerbears.com",212],["pirateblue.com",212],["pirateblue.net",212],["pirateblue.org",212],["quinnipiacbobcats.com",212],["towsontigers.com",212],["tribeathletics.com",212],["tribeclub.com",212],["utepminermaniacs.com",212],["utepminers.com",212],["wkutickets.com",212],["aopathletics.org",212],["atlantichockeyonline.com",212],["bigsouthnetwork.com",212],["bigsouthsports.com",212],["chawomenshockey.com",212],["dbupatriots.org",212],["drakerelays.org",212],["ecac.org",212],["ecacsports.com",212],["emueagles.com",212],["emugameday.com",212],["gculopes.com",212],["godrakebulldog.com",212],["godrakebulldogs.com",212],["godrakebulldogs.net",212],["goeags.com",212],["goislander.com",212],["goislanders.com",212],["gojacks.com",212],["gomacsports.com",212],["gseagles.com",212],["hubison.com",212],["iowaconference.com",212],["ksuowls.com",212],["lonestarconference.org",212],["mascac.org",212],["midwestconference.org",212],["mountaineast.org",212],["niu-pack.com",212],["nulakers.ca",212],["oswegolakers.com",212],["ovcdigitalnetwork.com",212],["pacersports.com",212],["rmacsports.org",212],["rollrivers.com",212],["samfordsports.com",212],["uncpbraves.com",212],["usfdons.com",212],["wiacsports.com",212],["alaskananooks.com",212],["broncathleticfund.com",212],["cameronaggies.com",212],["columbiacougars.com",212],["etownbluejays.com",212],["gobadgers.ca",212],["golancers.ca",212],["gometrostate.com",212],["gothunderbirds.ca",212],["kentstatesports.com",212],["lehighsports.com",212],["lopers.com",212],["lycoathletics.com",212],["lycomingathletics.com",212],["maraudersports.com",212],["mauiinvitational.com",212],["msumavericks.com",212],["nauathletics.com",212],["nueagles.com",212],["nwusports.com",212],["oceanbreezenyc.org",212],["patriotathleticfund.com",212],["pittband.com",212],["principiaathletics.com",212],["roadrunnersathletics.com",212],["sidearmsocial.com",212],["snhupenmen.com",212],["stablerarena.com",212],["stoutbluedevils.com",212],["uwlathletics.com",212],["yumacs.com",212],["collegefootballplayoff.com",212],["csurams.com",212],["cubuffs.com",212],["gobearcats.com",212],["gohuskies.com",212],["mgoblue.com",212],["osubeavers.com",212],["pittsburghpanthers.com",212],["rolltide.com",212],["texassports.com",212],["thesundevils.com",212],["uclabruins.com",212],["wvuathletics.com",212],["wvusports.com",212],["arizonawildcats.com",212],["calbears.com",212],["cuse.com",212],["georgiadogs.com",212],["goducks.com",212],["goheels.com",212],["gostanford.com",212],["insidekstatesports.com",212],["insidekstatesports.info",212],["insidekstatesports.net",212],["insidekstatesports.org",212],["k-stateathletics.com",212],["k-statefootball.net",212],["k-statefootball.org",212],["k-statesports.com",212],["k-statesports.net",212],["k-statesports.org",212],["k-statewomenshoops.com",212],["k-statewomenshoops.net",212],["k-statewomenshoops.org",212],["kstateathletics.com",212],["kstatefootball.net",212],["kstatefootball.org",212],["kstatesports.com",212],["kstatewomenshoops.com",212],["kstatewomenshoops.net",212],["kstatewomenshoops.org",212],["ksuathletics.com",212],["ksusports.com",212],["scarletknights.com",212],["showdownforrelief.com",212],["syracusecrunch.com",212],["texastech.com",212],["theacc.com",212],["ukathletics.com",212],["usctrojans.com",212],["utahutes.com",212],["utsports.com",212],["wsucougars.com",212],["tricksplit.io",212],["fangraphs.com",213],["4players.de",[214,324]],["buffed.de",214],["gamesaktuell.de",214],["gamezone.de",214],["pcgames.de",214],["videogameszone.de",214],["tvspielfilm.de",[215,216,217,218]],["tvtoday.de",[215,216,217,218]],["chip.de",[215,216,217,218]],["focus.de",[215,216,217,218]],["planetaminecraft.com",219],["cravesandflames.com",220],["codesnse.com",220],["link.paid4file.com",220],["flyad.vip",220],["lapresse.ca",221],["kolyoom.com",222],["ilovephd.com",222],["negumo.com",223],["games.wkb.jp",[224,225]],["channelmyanmar.org",[226,227]],["u-s-news.com",227],["fandom.com",[228,553,554]],["kenshi.fandom.com",229],["hausbau-forum.de",230],["homeairquality.org",230],["faucettronn.click",230],["ticketmaster.sg",230],["fake-it.ws",231],["laksa19.github.io",232],["1shortlink.com",233],["nesia.my.id",234],["makemoneywithurl.com",235],["junkyponk.com",235],["healthfirstweb.com",235],["vocalley.com",235],["yogablogfit.com",235],["en.financerites.com",235],["mythvista.com",235],["livenewsflix.com",235],["cureclues.com",235],["apekite.com",235],["blogtechh.com",235],["techbixby.com",235],["blogmyst.com",235],["resetoff.pl",236],["sexodi.com",236],["cdn77.org",237],["howtofixwindows.com",238],["3sexporn.com",239],["momxxxsex.com",239],["myfreevintageporn.com",239],["penisbuyutucum.net",239],["ujszo.com",240],["newsmax.com",241],["bobs-tube.com",242],["nadidetarifler.com",243],["siz.tv",243],["suzylu.co.uk",[244,245]],["onworks.net",246],["yabiladi.com",246],["downloadsoft.net",247],["pixsera.net",248],["testlanguages.com",249],["newsinlevels.com",249],["videosinlevels.com",249],["cbs.com",250],["paramountplus.com",250],["buktube.com",251],["fullxh.com",251],["galleryxh.site",251],["megaxh.com",251],["movingxh.world",251],["seexh.com",251],["taoxh.life",251],["unlockxh4.com",251],["xhaccess.com",251],["xhadult2.com",251],["xhadult3.com",251],["xhadult4.com",251],["xhadult5.com",251],["xhamster46.com",251],["xhbig.com",251],["xhbranch5.com",251],["xhday.com",251],["xhday1.com",251],["xhmoon5.com",251],["xhplanet1.com",251],["xhplanet2.com",251],["xhreal2.com",251],["xhreal3.com",251],["xhtab2.com",251],["xhtab4.com",251],["xhtree.com",251],["xhvictory.com",251],["xhwebsite.com",251],["xhwebsite2.com",251],["xhwide1.com",251],["lightnovelworld.com",252],["ultimate-guitar.com",253],["teachmemicro.com",254],["willcycle.com",254],["2ndrun.tv",254],["rackusreads.com",254],["xyzsports111.xyz",[255,256,257]],["xyzsports112.xyz",[255,256,257]],["xyzsports113.xyz",[255,256,257]],["xyzsports114.xyz",[255,256,257]],["xyzsprtsfrmr1.site",[255,256,257]],["xyzsprtsfrmr2.site",[255,256,257]],["claimbits.net",258],["sexyscope.net",259],["recherche-ebook.fr",261],["easymc.io",261],["zonebourse.com",262],["pink-sluts.net",263],["madoohd.com",264],["andhrafriends.com",265],["benzinpreis.de",266],["defenseone.com",267],["govexec.com",267],["nextgov.com",267],["route-fifty.com",267],["sharing.wtf",268],["th.gl",[269,270]],["wetter3.de",271],["arahdrive.com",272],["aiimgvlog.fun",[272,281]],["esportivos.fun",273],["cosmonova-broadcast.tv",274],["soccerinhd.com",275],["techedubyte.com",275],["rock.porn",[276,277]],["videzz.net",278],["ezaudiobookforsoul.com",279],["club386.com",280],["sinonimos.de",281],["antonimos.de",281],["quesignifi.ca",281],["tiktokrealtime.com",281],["tiktokcounter.net",281],["tpayr.xyz",281],["poqzn.xyz",281],["ashrfd.xyz",281],["rezsx.xyz",281],["tryzt.xyz",281],["ashrff.xyz",281],["rezst.xyz",281],["dawenet.com",281],["erzar.xyz",281],["waezm.xyz",281],["waezg.xyz",281],["blackwoodacademy.org",281],["cryptednews.space",281],["vivuq.com",281],["swgop.com",281],["vbnmll.com",281],["telcoinfo.online",281],["dshytb.com",281],["btcbitco.in",[281,284]],["btcsatoshi.net",281],["cempakajaya.com",281],["crypto4yu.com",281],["readbitcoin.org",281],["wiour.com",281],["finish.addurl.biz",281],["armypowerinfo.com",281],["bhugolinfo.com",281],["rsadnetworkinfo.com",281],["rsinsuranceinfo.com",281],["rsfinanceinfo.com",281],["rsgamer.app",281],["rssoftwareinfo.com",281],["rshostinginfo.com",281],["rseducationinfo.com",281],["exactpay.online",281],["kiddyearner.com",281],["luckydice.net",282],["adarima.org",282],["tieutietkiem.com",282],["weatherwx.com",282],["sattaguess.com",282],["winshell.de",282],["rosasidan.ws",282],["modmakers.xyz",282],["gamepure.in",282],["warrenrahul.in",282],["austiblox.net",282],["upiapi.in",282],["myownguess.in",282],["networkhint.com",282],["watchhentai.net",282],["thichcode.net",282],["texturecan.com",282],["tikmate.app",[282,503]],["4funbox.com",283],["nephobox.com",283],["1024tera.com",283],["blog.cryptowidgets.net",284],["blog.insurancegold.in",284],["blog.wiki-topia.com",284],["blog.coinsvalue.net",284],["blog.cookinguide.net",284],["blog.freeoseocheck.com",284],["blog24.me",284],["bildirim.link",286],["appsbull.com",287],["diudemy.com",287],["maqal360.com",287],["lifesurance.info",288],["infokeeda.xyz",289],["webzeni.com",289],["dl.apkmoddone.com",290],["arcai.com",291],["my-code4you.blogspot.com",292],["flickr.com",293],["firefile.cc",294],["pestleanalysis.com",294],["kochamjp.pl",294],["tutorialforlinux.com",294],["whatsaero.com",294],["animeblkom.net",[294,310]],["blkom.com",294],["globes.co.il",[295,296]],["jardiner-malin.fr",297],["tw-calc.net",298],["ohmybrush.com",299],["talkceltic.net",300],["mentalfloss.com",301],["uprafa.com",302],["cube365.net",303],["nightfallnews.com",[304,305]],["wwwfotografgotlin.blogspot.com",306],["freelistenonline.com",306],["badassdownloader.com",307],["quickporn.net",308],["yellowbridge.com",309],["aosmark.com",311],["atozmath.com",[313,314,315,316,317,318,319]],["newyorker.com",320],["brighteon.com",321],["more.tv",322],["video1tube.com",323],["alohatube.xyz",323],["fshost.me",325],["link.cgtips.org",326],["hentaicloud.com",327],["netfapx.com",329],["paperzonevn.com",330],["hentaienglish.com",331],["hentaiporno.xxx",331],["venge.io",[332,333]],["btcbux.io",334],["its.porn",[335,336]],["atv.at",337],["kusonime.com",[338,339]],["jetpunk.com",341],["imgur.com",342],["hentai-party.com",343],["hentaicomics.pro",343],["xxx-comics.pro",343],["genshinimpactcalculator.com",346],["axenthost.com",346],["mysexgames.com",347],["embed.indavideo.hu",350],["coinurl.net",[351,352]],["gdr-online.com",353],["mmm.dk",354],["iqiyi.com",[355,356,497]],["m.iqiyi.com",357],["japopav.tv",358],["lvturbo.com",358],["nbcolympics.com",359],["apkhex.com",360],["indiansexstories2.net",361],["issstories.xyz",361],["1340kbbr.com",362],["gorgeradio.com",362],["kduk.com",362],["kedoam.com",362],["kejoam.com",362],["kelaam.com",362],["khsn1230.com",362],["kjmx.rocks",362],["kloo.com",362],["klooam.com",362],["klykradio.com",362],["kmed.com",362],["kmnt.com",362],["kool991.com",362],["kpnw.com",362],["kppk983.com",362],["krktcountry.com",362],["ktee.com",362],["kwro.com",362],["kxbxfm.com",362],["thevalley.fm",362],["quizlet.com",363],["dsocker1234.blogspot.com",364],["blick.ch",365],["mgnet.xyz",366],["designtagebuch.de",367],["pixroute.com",368],["uploady.io",369],["calculator-online.net",370],["porngames.club",371],["sexgames.xxx",371],["111.90.159.132",372],["battleplan.news",372],["mobile-tracker-free.com",373],["pfps.gg",374],["ac-illust.com",[375,376]],["photo-ac.com",[375,376]],["vlxxs.net",377],["rapelust.com",377],["vtube.to",377],["vtplay.net",377],["desitelugusex.com",377],["xvideos-downloader.net",377],["xxxvideotube.net",377],["sdefx.cloud",377],["nozomi.la",377],["moviesonlinefree.net",377],["social-unlock.com",378],["ninja.io",379],["sourceforge.net",380],["samfirms.com",381],["banned.video",382],["madmaxworld.tv",382],["huffpost.com",383],["ingles.com",384],["spanishdict.com",384],["surfline.com",[385,386]],["play.tv3.ee",387],["play.tv3.lt",387],["play.tv3.lv",387],["tv3play.skaties.lv",387],["trendyoum.com",388],["bulbagarden.net",389],["moviestars.to",390],["hollywoodlife.com",391],["mat6tube.com",392],["textstudio.co",393],["newtumbl.com",394],["nevcoins.club",396],["mail.com",397],["oggi.it",[400,401]],["manoramamax.com",400],["video.gazzetta.it",[400,401]],["mangakita.id",402],["mangakita.net",402],["poscishd.online",403],["avpgalaxy.net",404],["mhma12.tech",405],["panda-novel.com",406],["zebranovel.com",406],["lightsnovel.com",406],["eaglesnovel.com",406],["pandasnovel.com",406],["zadfaucet.com",407],["ewrc-results.com",408],["kizi.com",409],["cyberscoop.com",410],["fedscoop.com",410],["canale.live",411],["mafiatown.pl",[412,413]],["jeep-cj.com",414],["sponsorhunter.com",415],["cloudcomputingtopics.net",416],["likecs.com",417],["tiscali.it",418],["linkspy.cc",419],["tutelehd3.xyz",420],["dirty.pink",[421,422,423]],["adshnk.com",424],["chattanoogan.com",425],["adsy.pw",426],["playstore.pw",426],["socialmediagirls.com",427],["windowspro.de",428],["snapinsta.app",429],["tvtv.ca",430],["tvtv.us",430],["mydaddy.cc",431],["roadtrippin.fr",432],["redketchup.io",[433,434,435]],["anyporn.com",[436,451]],["bravoporn.com",436],["bravoteens.com",436],["crocotube.com",436],["hellmoms.com",436],["hellporno.com",436],["sex3.com",436],["tubewolf.com",436],["xbabe.com",436],["xcum.com",436],["zedporn.com",436],["imagetotext.info",437],["infokik.com",438],["freepik.com",439],["ddwloclawek.pl",[440,441]],["deezer.com",442],["my-subs.co",443],["plaion.com",444],["slideshare.net",[445,446]],["ustreasuryyieldcurve.com",447],["businesssoftwarehere.com",448],["goo.st",448],["freevpshere.com",448],["softwaresolutionshere.com",448],["staige.tv",452],["in-jpn.com",453],["oninet.ne.jp",453],["xth.jp",453],["androidadult.com",454],["streamvid.net",455],["watchtv24.com",456],["cellmapper.net",457],["medscape.com",458],["newscon.org",[459,460]],["arkadium.com",461],["wheelofgold.com",462],["ozulmanga.com",462],["bembed.net",463],["elbailedeltroleo.site",463],["embedv.net",463],["fslinks.org",463],["listeamed.net",463],["v6embed.xyz",463],["vgplayer.xyz",463],["vid-guard.com",463],["app.blubank.com",464],["mobileweb.bankmellat.ir",464],["sportdeutschland.tv",465],["kcra.com",465],["wcvb.com",465],["ccthesims.com",470],["chromeready.com",470],["coursedrive.org",470],["dtbps3games.com",470],["illustratemagazine.com",470],["uknip.co.uk",470],["vod.pl",471],["megadrive-emulator.com",472],["animesaga.in",475],["moviesapi.club",475],["bestx.stream",475],["watchx.top",475],["digimanie.cz",476],["svethardware.cz",476],["srvy.ninja",477],["drawer-opportunity-i-243.site",478],["tchatche.com",479],["edmdls.com",480],["freshremix.net",480],["scenedl.org",480],["trakt.tv",[481,482,483]],["shroomers.app",484],["classicalradio.com",[485,486,487]],["di.fm",[485,486,487]],["jazzradio.com",[485,486,487]],["radiotunes.com",[485,486,487]],["rockradio.com",[485,486,487]],["zenradio.com",[485,486,487]],["pc-builds.com",488],["qtoptens.com",488],["reuters.com",488],["today.com",488],["videogamer.com",488],["wrestlinginc.com",488],["gbatemp.net",488],["movie-th.tv",489],["iwanttfc.com",490],["nutraingredients-asia.com",491],["nutraingredients-latam.com",491],["nutraingredients-usa.com",491],["nutraingredients.com",491],["livesportsclub.me",492],["rogstream.fun",492],["ozulscansen.com",493],["fitnessbr.click",494],["minhareceita.xyz",494],["doomied.monster",495],["lookmovie2.to",495],["royalroad.com",496],["biletomat.pl",498],["hextank.io",[499,500]],["filmizlehdfilm.com",[501,502]],["sagewater.com",504],["redlion.net",504],["satdl.com",505],["veev.to",[506,507]],["vidstreaming.xyz",508],["everand.com",509],["myradioonline.pl",510],["tacobell.com",512],["zefoy.com",513],["natgeotv.com",515],["foxbusiness.com",[516,517,518]],["foxnews.com",[516,517,518]],["br.de",519],["indeed.com",520],["pasteboard.co",521],["clickhole.com",522],["deadspin.com",522],["gizmodo.com",522],["jalopnik.com",522],["jezebel.com",522],["kotaku.com",522],["lifehacker.com",522],["splinternews.com",522],["theinventory.com",522],["theonion.com",522],["theroot.com",522],["thetakeout.com",522],["pewresearch.org",522],["los40.com",[523,524]],["as.com",524],["telegraph.co.uk",[525,526]],["poweredbycovermore.com",[525,575]],["lumens.com",[525,575]],["verizon.com",527],["humanbenchmark.com",528],["politico.com",529],["officedepot.co.cr",[530,531]],["usnews.com",534],["factable.com",536],["zee5.com",537],["gala.fr",538],["geo.fr",538],["voici.fr",538],["gloucestershirelive.co.uk",539],["arsiv.mackolik.com",540],["jacksonguitars.com",541],["scandichotels.com",542],["stylist.co.uk",543],["nettiauto.com",544],["thaiairways.com",[545,546]],["cerbahealthcare.it",[547,548]],["futura-sciences.com",[547,565]],["tiendaenlinea.claro.com.ni",[549,550]],["tieba.baidu.com",551],["linktr.ee",552],["grasshopper.com",[555,556]],["epson.com.cn",[557,558,559,560]],["oe24.at",[561,562]],["szbz.de",561],["platform.autods.com",[563,564]],["wikihow.com",566],["citibank.com.sg",567],["uol.com.br",[568,569,570,571]],["gazzetta.gr",572],["digicol.dpm.org.cn",[573,574]],["virginmediatelevision.ie",576],["larazon.es",[577,578]],["waitrosecellar.com",[579,580,581]],["sharpen-free-design-generator.netlify.app",[583,584]],["help.cashctrl.com",[585,586]],["commande.rhinov.pro",[587,588]],["ecom.wixapps.net",[587,588]],["tipranks.com",[589,590]],["iceland.co.uk",[591,592,593]],["socket.pearsoned.com",594],["tntdrama.com",[595,596]],["mobile.de",[597,598]],["ioe.vn",[599,600]],["geiriadur.ac.uk",[599,603]],["bikeportland.org",[601,602]],["biologianet.com",[569,570,571]],["10play.com.au",[604,605]],["sunshine-live.de",[606,607]],["whatismyip.com",[608,609]],["myfitnesspal.com",610],["netoff.co.jp",[611,612]],["clickjogos.com.br",615],["bristan.com",[616,617]],["zillow.com",618],["share.hntv.tv",[619,620,621,622]],["optimum.net",[623,624]],["pvrcinemas.com",[625,626]],["investor-web.hdfcfund.com",627],["user.guancha.cn",[628,629]],["financemonk.net",[630,631,632,633]],["weather.com",[634,635]],["ubereats.com",[634,635]]]);

const entitiesMap = new Map([["watch-series",9],["watchseries",9],["vev",9],["vidop",9],["vidup",9],["starmusiq",12],["wcofun",12],["kissasian",14],["gogoanime",[14,51]],["1movies",[14,17]],["xmovies8",14],["animeheaven",14],["0123movies",14],["gostream",14],["gomovies",14],["primewire",15],["streanplay",[15,16]],["sbplay",15],["milfnut",15],["sxyprn",20],["hqq",[21,22]],["waaw",[22,23]],["younetu",22],["vvtplayer",22],["123link",24],["adshort",24],["linkshorts",24],["adsrt",24],["vinaurl",24],["adfloz",24],["dutchycorp",24],["shortearn",24],["pingit",24],["shrink",24],["tmearn",24],["megalink",24],["miniurl",24],["gplinks",24],["clk",24],["pureshort",24],["shrinke",24],["shrinkme",24],["pcprogramasymas",24],["link1s",24],["shortzzy",24],["shorttey",[24,206]],["lite-link",24],["adcorto",24],["zshort",24],["upfiles",24],["linkfly",24],["wplink",24],["seulink",24],["encurtalink",24],["camwhores",[25,38,89,90,91]],["tube8",[26,27]],["youporn",27],["redtube",27],["pornhub",[27,192]],["upornia",[29,30]],["fmovies",51],["xtits",[55,124]],["streamwish",[57,58]],["pouvideo",64],["povvideo",64],["povw1deo",64],["povwideo",64],["powv1deo",64],["powvibeo",64],["powvideo",64],["powvldeo",64],["acortalo",[69,70,71,72]],["acortar",[69,70,71,72]],["plyjam",[73,74]],["fxporn69",79],["vipbox",80],["viprow",80],["desbloqueador",85],["xberuang",87],["teknorizen",87],["subtorrents",94],["subtorrents1",94],["newpelis",94],["pelix",94],["allcalidad",94],["infomaniakos",94],["filecrypt",98],["tornadomovies",104],["sexwebvideo",105],["mangovideo",105],["icdrama",111],["mangasail",111],["file4go",113],["asianclub",132],["anitube",135],["mixdrop",137],["uploadev",161],["ver-pelis-online",170],["azsoft",171],["ancient-origins",179],["spankbang",199],["lookcam",206],["lootlinks",206],["dpstream",209],["bluemediafiles",211],["docer",236],["hamsterix",251],["xhamster",251],["xhamster1",251],["xhamster10",251],["xhamster11",251],["xhamster12",251],["xhamster13",251],["xhamster14",251],["xhamster15",251],["xhamster16",251],["xhamster17",251],["xhamster18",251],["xhamster19",251],["xhamster20",251],["xhamster2",251],["xhamster3",251],["xhamster4",251],["xhamster42",251],["xhamster5",251],["xhamster7",251],["xhamster8",251],["kickassanime",260],["doomovie-hd",264],["terabox",283],["ctrlv",312],["123movieshd",340],["uproxy",344],["animesa",345],["cinecalidad",[348,349]],["dvdplay",377],["apkmaven",395],["gmx",398],["gamereactor",450],["vembed",463],["empire-stream",[466,467,468]],["empire-streaming",[466,467,468]],["empire-streamz",[466,467,468]],["tvhay",[473,474]],["lookmovie",495],["filmizletv",[501,502]],["www.google",511],["officedepot",[532,533]],["foundit",[613,614]],["dropgalaxy",[630,631,632,633]]]);

const exceptionsMap = new Map([["pingit.com",[24]],["pingit.me",[24]],["lookmovie.studio",[495]]]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantFn(false, ...args);
}

function setConstantFn(
    trusted = false,
    chain = '',
    rawValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('set-constant', chain, rawValue);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, rawValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            return new Proxy(fn, {
                defineProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.defineProperty(...arguments);
                    }
                    return true;
                },
                deleteProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.deleteProperty(...arguments);
                    }
                    return true;
                },
                get(target, prop) {
                    if ( prop === 'toString' ) {
                        return function() {
                            return `function ${trappedProp}() { [native code] }`;
                        }.bind(null);
                    }
                    return Reflect.get(...arguments);
                },
            });
        };
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        let normalValue = validateConstantFn(trusted, rawValue);
        if ( rawValue === 'noopFunc' || rawValue === 'trueFunc' || rawValue === 'falseFunc' ) {
            normalValue = cloakFunc(normalValue);
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (normalValue !== undefined && normalValue !== null) &&
                (typeof v !== typeof normalValue);
            if ( aborted ) {
                safe.uboLog(logPrefix, `Aborted because value set to ${v}`);
            }
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : normalValue) === false ) { return; }
            const odesc = safe.Object_getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof safe.Object ) {
                owner[prop] = normalValue;
                if ( odesc.get instanceof Function ) {
                    prevGetter = odesc.get;
                }
                if ( odesc.set instanceof Function ) {
                    prevSetter = odesc.set;
                }
            }
            try {
                safe.Object_defineProperty(owner, prop, {
                    configurable,
                    get() {
                        if ( prevGetter !== undefined ) {
                            prevGetter();
                        }
                        return handler.getter();
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
                safe.uboLog(logPrefix, 'Trap installed');
            } catch(ex) {
                safe.uboErr(logPrefix, ex);
            }
        };
        const trapChain = function(owner, chain) {
            const pos = chain.indexOf('.');
            if ( pos === -1 ) {
                trapProp(owner, chain, false, {
                    v: undefined,
                    init: function(v) {
                        if ( mustAbort(v) ) { return false; }
                        this.v = v;
                        return true;
                    },
                    getter: function() {
                        if ( document.currentScript === thisScript ) {
                            return this.v;
                        }
                        safe.uboLog(logPrefix, 'Property read');
                        return normalValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        normalValue = a;
                    }
                });
                return;
            }
            const prop = chain.slice(0, pos);
            const v = owner[prop];
            chain = chain.slice(pos + 1);
            if ( v instanceof safe.Object || typeof v === 'object' && v !== null ) {
                trapChain(v, chain);
                return;
            }
            trapProp(owner, prop, true, {
                v: undefined,
                init: function(v) {
                    this.v = v;
                    return true;
                },
                getter: function() {
                    return this.v;
                },
                setter: function(a) {
                    this.v = a;
                    if ( a instanceof safe.Object ) {
                        trapChain(a, chain);
                    }
                }
            });
        };
        trapChain(window, chain);
    }
    runAt(( ) => {
        setConstant(chain, rawValue);
    }, extraArgs.runAt);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
}

function safeSelf() {
    if ( scriptletGlobals.safeSelf ) {
        return scriptletGlobals.safeSelf;
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        // Properties
        logLevel: 0,
        // Methods
        makeLogPrefix(...args) {
            return this.sendToLogger && `[${args.join(' \u205D ')}]` || '';
        },
        uboLog(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('info', ...args);
            
        },
        uboErr(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('error', ...args);
        },
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(this.escapeRegexChars(pattern),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = this.escapeRegexChars(pattern);
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch(ex) {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( bcBuffer === undefined ) {
            return bc.postMessage({ what: 'messageToLogger', type, text });
        }
        bcBuffer.push({ type, text });
    };
    bc.onmessage = ev => {
        const msg = ev.data;
        switch ( msg ) {
        case 'iamready!':
            if ( bcBuffer === undefined ) { break; }
            bcBuffer.forEach(({ type, text }) =>
                bc.postMessage({ what: 'messageToLogger', type, text })
            );
            bcBuffer = undefined;
            break;
        case 'setScriptletLogLevelToOne':
            safe.logLevel = 1;
            break;
        case 'setScriptletLogLevelToTwo':
            safe.logLevel = 2;
            break;
        }
    };
    bc.postMessage('areyouready?');
    return safe;
}

function validateConstantFn(trusted, raw) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    let value;
    if ( raw === 'undefined' ) {
        value = undefined;
    } else if ( raw === 'false' ) {
        value = false;
    } else if ( raw === 'true' ) {
        value = true;
    } else if ( raw === 'null' ) {
        value = null;
    } else if ( raw === "''" || raw === '' ) {
        value = '';
    } else if ( raw === '[]' || raw === 'emptyArr' ) {
        value = [];
    } else if ( raw === '{}' || raw === 'emptyObj' ) {
        value = {};
    } else if ( raw === 'noopFunc' ) {
        value = function(){};
    } else if ( raw === 'trueFunc' ) {
        value = function(){ return true; };
    } else if ( raw === 'falseFunc' ) {
        value = function(){ return false; };
    } else if ( /^-?\d+$/.test(raw) ) {
        value = parseInt(raw);
        if ( isNaN(raw) ) { return; }
        if ( Math.abs(raw) > 0x7FFF ) { return; }
    } else if ( trusted ) {
        if ( raw.startsWith('{') && raw.endsWith('}') ) {
            try { value = safe.JSON_parse(raw).value; } catch(ex) { return; }
        }
    } else {
        return;
    }
    if ( extraArgs.as !== undefined ) {
        if ( extraArgs.as === 'function' ) {
            return ( ) => value;
        } else if ( extraArgs.as === 'callback' ) {
            return ( ) => (( ) => value);
        } else if ( extraArgs.as === 'resolved' ) {
            return Promise.resolve(value);
        } else if ( extraArgs.as === 'rejected' ) {
            return Promise.reject(value);
        }
    }
    return value;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { setConstant(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_setConstant();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_setConstant = cloneInto([
            [ '(', uBOL_setConstant.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_setConstant);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_setConstant;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
