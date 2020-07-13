import { Decompress } from './decompress.js';

var CompressUtils = {
    KEY_MAP_FIELD: 'playcanvas_compressed',

    decompress: function (data) {
        var srcToDst = data[CompressUtils.KEY_MAP_FIELD];

        if (srcToDst) {
            delete data[CompressUtils.KEY_MAP_FIELD];

            data = new Decompress(data, srcToDst).run();
        }

        return data;
    }
};

export { CompressUtils };