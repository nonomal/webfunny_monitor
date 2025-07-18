module.exports = [
    // monitor
    "/getSysInfo",
    "/getValidateCode", "/refreshValidateCode", "/login", "/register",
    "/registerForAdmin", "/sendRegisterEmail", "/resetPwd", "/upBp", "/uploadMapFile",
    "/checkSsoToken", "/loginForApi", "/registerForApi", "/createNewTeamForApi", "/createNewProjectForApi",
    "/projectSimpleListByWebmonitorIds", "/addViewers", "/otel/trace", "/project/list/all", "/getAllProjectWithCompanyId",
    "/monitorBaseInfo", "/storeTokenToMemory", "getJavascriptErrorStackCodeForSource", "/wfMonitor/getLogCountInfoByDay",
    , "/wfMonitor/checkAlarmResult", "/uploadSourceMap",
    
    // center
    // "/getUserInfo", 
    "/hasSuperAdminAccount", "/getValidateCode", "/refreshValidateCode", "/login", "/register", "/wfCenter/getUserByPhone",
    "/registerForAdmin", "/sendRegisterEmail", "/resetPwd", "/upBp", "/uploadMapFile", "/health",
    "/checkSsoToken", "/getUserTokenFromNetworkByToken", "/getSysConfigInfo",
    "/loginForApi", "/registerForApi", "/createNewTeamForApi", "/createNewProjectForApi", 
    "/getTeams", "/getTeamListWithoutToken", "/getTeamDetail", "/updateTeam", "/createFlowData",
    "/getSignatureForFeiShu", "/getAccessTokenByCodeForFeiShu", "/getAccessTokenByCodeForIds", "/apiIdsNotice",
    "/getCompanyList", "/checkUserByOpenid",

    //event
    "/sysInfo", "/getSysInfo",
    "/getConcurrencyByMinuteInHour", "/initCf", "/upEvent", "/upEvents",
    "/export", "/sdkRelease/downLoad", "/getValidateCode",
    "/refreshValidateCode", "/login", "/register", "/registerForAdmin",
    "/sendRegisterEmail", "/resetPwd", "/projectSimpleListByWebmonitorIds", "screenShot/upload",
    "/eventBaseInfo", "/storeTokenToMemory", "/upgradeVersion", "buryPointTest/searchExport",
    "/buryPointCard/getHeatMapPerData", "/buryPointVisualTracking/create", "/wfEvent/checkWeFieldData",
    "/getExportCode",
    "/buryPointWarehouse/downloadExcel",
    "/buryPointWarehouse/downloadTemplate",
    "/buryPointWarehouse/downFileByName",
    "/buryPointTemplate/download",

    // logger
    "/wfLog/upLogs", "/wfLog/upErrLogs",

    // walkingfunny 过滤登录校验
    "/walkingfunnyWithoutLogin/",


]