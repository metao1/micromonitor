var McmMissingTranslationHandler = /** @class */ (function () {
    function McmMissingTranslationHandler(configService) {
        this.configService = configService;
    }
    McmMissingTranslationHandler.prototype.handle = function (params) {
        var key = params.key;
        return this.configService.getConfig().noi18nMessage + "[" + key + "]";
    };
    return McmMissingTranslationHandler;
}());
export { McmMissingTranslationHandler };
