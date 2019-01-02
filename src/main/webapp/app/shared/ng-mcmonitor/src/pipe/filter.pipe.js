import { Pipe } from '@angular/core';
var McmFilterPipe = /** @class */ (function () {
    function McmFilterPipe() {
    }
    McmFilterPipe.prototype.filterByStringAndField = function (filter, field) {
        return function (value) {
            return !filter || (value[field] && value[field].toLowerCase().indexOf(filter.toLowerCase()) !== -1);
        };
    };
    // adapted from https://github.com/VadimDez/ng2-filter-pipe
    // adapted from https://github.com/VadimDez/ng2-filter-pipe
    McmFilterPipe.prototype.filterByString = 
    // adapted from https://github.com/VadimDez/ng2-filter-pipe
    function (filter) {
        return function (value) {
            return !filter || value.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        };
    };
    McmFilterPipe.prototype.filterDefault = function (filter) {
        return function (value) {
            return !filter || filter === value;
        };
    };
    McmFilterPipe.prototype.filterByObject = function (filter) {
        var _this = this;
        return function (value) {
            var keys = Object.keys(filter);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var type = typeof value[key];
                var isMatching = void 0;
                if (type === 'string') {
                    isMatching = _this.filterByString(filter[key])(value[key]);
                }
                else if (type === 'object') {
                    isMatching = _this.filterByObject(filter[key])(value[key]);
                }
                else {
                    isMatching = _this.filterDefault(filter[key])(value[key]);
                }
                if (!isMatching) {
                    return false;
                }
            }
            return true;
        };
    };
    McmFilterPipe.prototype.transform = function (input, filter, field) {
        if (!filter) {
            return input;
        }
        var type = typeof filter;
        if (type === 'string') {
            if (field) {
                return input.filter(this.filterByStringAndField(filter, field));
            }
            return input.filter(this.filterByString(filter));
        }
        if (type === 'object') {
            return input.filter(this.filterByObject(filter));
        }
    };
    McmFilterPipe.decorators = [
        { type: Pipe, args: [{ name: 'filter', pure: false },] },
    ];
    return McmFilterPipe;
}());
export { McmFilterPipe };
