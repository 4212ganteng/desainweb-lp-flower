import { useState } from 'react';

const ContentBody = () => {

    const data = [
        {
            desc: 'Tulip merupakan tumbuhan tahunan berumbi yang tingginya antara 10–70 cm. Daunnya berlilin, berbentuk sempit memanjang berwarna hijau nuansa kebiru-biruan. Bunganya berukuran besar, terdiri dari 6 helai daun mahkota. Tulip hasil persilangan menghasilkan bunga berwarna tunggal, merah, oranye, kuning, hijau, biru, ungu, atau berbagai macam kombinasi dan gradasi warna. Tulip menghasilkan biji-biji berbentuk bundar pipih yang dibungkus kapsul kering.',
            img: '/images/tulip.jpg'
        },
        {
            desc: 'Bunga matahari (Helianthus annuus L.) adalah tumbuhan semusim dari suku kenikir-kenikiran (Asteraceae) yang populer, baik sebagai tanaman hias maupun tanaman penghasil minyak. Bunga tanaman ini sangat khas: besar, biasanya berwarna kuning terang, dengan kepala bunga yang besar (diameter bisa mencapai 30 cm).[2] Bunga ini sebetulnya adalah bunga majemuk, tersusun dari ratusan hingga ribuan bunga kecil pada satu bongkol. Bunga Matahari juga memiliki perilaku khas, yaitu bunganya selalu menghadap / condong ke arah matahari atau heliotropisme. Orang Prancis menyebutnya tournesol atau "pengelana Matahari". Namun, sifat ini disingkirkan pada berbagai kultivar baru untuk produksi minyak karena memakan banyak energi dan mengurangi hasil.',
            img: '/images/sunflower.jpeg'
        },
        {
            desc: 'Bunga Mawar  adalah tumbuhan perdu, pohonnya berduri, bunganya berbau wangi dan berwarna indah, terdiri atas daun bunga yang bersusun;[2] meliputi ratusan jenis, tumbuh tegak atau memanjat, batangnya berduri, bunganya beraneka warna, seperti merah, putih, merah jambu, merah tua, dan berbau harum.[1] Mawar liar terdiri dari 100 spesies lebih, kebanyakan tumbuh di belahan bumi utara yang berudara sejuk. Spesies ini umumnya merupakan tanaman semak yang berduri atau tanaman memanjat yang tingginya bisa mencapai 2 sampai 5 meter. Walaupun jarang ditemui, tinggi tanaman mawar yang merambat di tanaman lain bisa mencapai 20 meter.',
            img: '/images/rose.jpeg'
        },
    ]
    const [selectedImage, setSelectedImage] = useState(data[0]);
    return (
        <>

            <div className="grid grid-cols-3 gap-4 ">

                <div className="bg-blue-400 py-24 px-5">
                    <div className='grid grid-cols-3 gap-1'>

                        {data.map((item, index) => (
                            <img
                                key={index}
                                src={item.img}
                                alt="flower"
                                className={`cursor-pointer w-40 h-40 border-2 ${selectedImage.img === item.img ? 'border-blue-500' : 'border-transparent'} hover:border-gray-500`}
                                onClick={() => setSelectedImage(item)}
                            />
                        ))}

                    </div>


                </div>

                <div className="bg-red-200 col-span-2 py-24 px-5">
                    <img src={selectedImage.img} alt="selected flower" className="w-60 h-60 border-2 border-gray-500" />
                    <p className="mt-4 text-gray-700">{selectedImage.desc}</p>
                </div>
            </div>



        </>

    );
}

export default ContentBody