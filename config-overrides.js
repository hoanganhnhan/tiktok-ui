module.exports = function override(config, env) {
    //do stuff with the webpack config...
    return config;
}

//ghi de cau hinh webpack o file nay
//------------
//----webpack ko load file .babelrc nen la phai cau hinh vao day:
const { override, useBabelRc } = require("customize-cra");
module.exports = override(
    useBabelRc()
);
//override tra lai nguyen ban cau hinh webpack bi an di va export ra ngoai de chay du an
