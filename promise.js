const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) =>{
  try {
    const dataTeaterIXX = await promiseTheaterIXX();
    const dataTeaterVGC = await promiseTheaterVGC();

    const dataEmosi1 = dataTeaterIXX.filter((res) => res.hasil === emosi);
    const dataEmosi2 = dataTeaterVGC.filter((res) => res.hasil === emosi);
    
    return dataEmosi1.length + dataEmosi2.length;
  } catch (error) {}
};

module.exports = {
  promiseOutput,
};
