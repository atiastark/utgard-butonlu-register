// bot tokeni atiiass.js'nin içinde 144.satırda client.login("") şeklindedir!

module.exports = {
    bot: {
        prefix: ".", // prefix
        tokens: "",  // bot tokeni maindedir
        sahipler: ["746066222310883339", "752683146121707663"], // bot sahipleri
    },
    config: {
        botswid: "896697556199952434",// botun olduğu sunucu id
        footer: "atia'S ❤️ Swain!", // botun gönderdiği mesaj kısmının altındaki yazı
        status: "dnd", // dnd,idle,online olarak değiştirebilirsiniz
        tag: "♆",  // tagınız
        tagg: "♆", // aynı şekilde yine tag eğer isterseniz
        seslioda: "939916369493917716", // botun gireceğin ses kanalı id
        yassiniri: 14, // yaş sınırı
    },
    roller: {
        bot: "", // botun rolü id
        supheli: "939916163536814091", // şüpheli rolü id
        kayitsiz: "939916221724381224", // kayıtsız rolü id
        erkek1: "939916201918857256", // erkek rolü 1 id
        erkek2: "939916202929700985", // erkek rolü 2 yoksa boş bırakın
        erkek3: "939916203902783499", // erkek rolü 3 yoksa boş bırakın
        kiz1: "939916199318417468", // kız rolü 1 id
        kiz2: "939916199846875157", // kız rolü 2 yoksa boş bırakın
        kiz3: "939916201021276221", // kız rolü 3 yoksa boş bırakın
        tagli: "939916154653257748", // taglı,family rolü id
        yetkilistaff: "939916119232368712", // yetkili rolü
        registerstaff: "939916119232368712", // register rolü id
        cezali: "939916161645174864" // karantina rolü id 
    },
    kanallar: {
        welcome1: "939916306914881568", // register kanal id
        registerchat: "939916306914881568", // register chat id
        chat: "939916359243006062", // genel chat id
        kurallar: "939916320080818187", // kurallar id
        public: "939916296500428901", // public kategori id
        /*--------  --------*/
        komutlog: "939916518811127838", // komut logu id
        /*--------  --------*/
        otorollog: "939916514230943815", // otorol log id
        taglilog: "939916517577994290", // taglı log id
        kayitlog: "939916521923293236", // kayıt log id
        kayitsizlog: "939916527254245446", // kayıtsız log id
        isimlog: "939916525526188063", // isim log id
        viplog: "939916525526188063", // vip log id
    },
    emojiler: {
        discow000: "940932775891050506", // 0'dan 9'a kadar emoji id girilecek tamamı değil sadece id
        discow001: "940932775635189780",
        discow002: "940932776134340688",
        discow003: "940932776339841044",
        discow004: "940932775538749460",
        discow005: "940932774775365662",
        discow006: "940932774326599690",
        discow007: "940932775790407730",
        discow008: "940932775970754610",
        discow009: "941226128176201748",
        discow_yetkili: "941226654355841024", // herhangi bir emoji olur fark etmez onun id
        discow_ses: "935438839114248222", // herhangi bir emoji olur fark etmez onun id
        discow_kurallar: "935805358134407168", // herhangi bir emoji olur fark etmez onun id
        discow_carpi: "917002080269504522", // çarpı emojisi id
        discow_tik: "917002079334174760", // onay,tik emojisi id
        discow_kristal: "935805358134407168", // herhangi bir emoji olur fark etmez onun id
        discow_ok: "917002079334174760", // onay,tik emojisi id
    }
}