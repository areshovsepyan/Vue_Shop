export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          price: 46.88,
        },
        {
          id: 'p2',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
          title: 'Mountain Tent',
          price: 129.99,
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          price: 56.66,
        },
        {
          id: 'p4',
          image:
            'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg',
          title: 'Photo Camera',
          price: 331.39,
        },
        {
          id: 'p5',
          image:
            'https://www.cloudways.com/blog/wp-content/uploads/Smart-Watch.jpg',
          title: 'Smart watch',
          price: 74.89,
        },
        {
          id: 'p6',
          image:
            'https://cdn.vox-cdn.com/thumbor/3o5bkD-T3oQ3EIfXotA4k9P97TY=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22443013/5.png',
          title: 'Quality headset',
          price: 94.11,
        },
        {
          id: 'p7',
          image:
            'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1651894597337/6f93bc96c51ed602d8cb9a677bb596d8.png',
          title: 'Vivo Smartphone',
          price: 404.11,
        },
        {
          id: 'p8',
          image:
            'https://images.macrumors.com/t/i5vmPN0sajOHuaIGr5-VFOfPUN4=/1600x1200/smart/article-new/2019/02/MR-Future-Products-2020-2.png',
          title: 'Apple Products',
          price: 1099.99,
        },
        {
          id: 'p9',
          image:
            'https://cdn.shopify.com/s/files/1/2826/2250/products/Brazilian_Crush_Cheirosa_62_Body_Fragrance_Mist_Sol_de_Janeiro_0_500x.jpg?v=1629913951',
          title: 'Skin Care Product',
          price: 74.29,
        },
      ],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
