'use strict';

angular.module('app').filter('averageScore', [
    function() {
        return function(score) {
            if (!score) { return null; }

            var total = 0,
                count = 0;
            
            for (var key in score) {
                if (score.hasOwnProperty(key) && typeof score[key] === 'number') {
                    total += score[key];
                    count++;
                }
            }

            if (!total || !count) { return null; }

            return Math.round((total/count)*100)/100;
        };
    }
]);