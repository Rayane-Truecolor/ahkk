import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Miguel',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  commentary: [
    {
      id: '1',
      body: 'First comment',
      username: 'Jack',
      userId: '1',
      parentId: null,
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '2',
      body: 'Second comment',
      username: 'John',
      userId: '2',
      parentId: null,
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '3',
      body: 'First comment first child',
      username: 'John',
      userId: '2',
      parentId: '1',
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '4',
      body: 'Second comment second child',
      username: 'John',
      userId: '2',
      parentId: '2',
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
  ],

  products: [
    {
      /*_id: '1',*/
      name: 'Planche QuickSilver DISCUS 6"2',
      slug: 'planche01_quicksilver',
      category: 'Hybride',
      image: '/images/Hybride/planche01_quicksilver.jpg', // 679px × 829px
      price: 400,
      countInStock: 10,
      brand: 'QuickSilver',
      rating: 4,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      /*_id: '2',*/
      name: 'Planche Venon Sacad 6"0',
      slug: 'Planche Venon Sacad 6"0',
      category: 'Hybride',
      image: '/images/Hybride/planche01_venon.jpg',
      price: 440,
      countInStock: 0,
      brand: 'Venon',
      rating: 5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      /*_id: '3',*/
      name: 'Planche Vanon kudat 6"6',
      slug: 'Planche Vanon kudat 6"6',
      category: 'Hybride',
      image: '/images/Hybride/planche01_kudat.jpg',
      price: 450,
      countInStock: 15,
      brand: 'Kudat',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      /*_id: '4',*/
      name: 'Planche Mark Phipps Caviar 6"0',
      slug: 'Planche Mark Phipps Caviar 6"0',
      category: 'Hybride',
      image: '/images/Hybride/planche01_mark_Phipps_Caviar.jpg',
      price: 460,
      countInStock: 5,
      brand: 'Mark Phipps Caviar',
      rating: 4,
      numReviews: 10,
      description: 'high quality product',
    },
    /*Longboard*/
    {
      /*_id: '5',*/
      name: 'Planche Longbard Kudat Ultra',
      slug: 'planche01_longbard_Kudat',
      category: 'Longboard',
      image: '/images/Longboard/planche01_longbard_Kudat.jpg',
      price: 580,
      countInStock: 5,
      brand: 'Kudat',
      rating: 3,
      numReviews: 10,
      description: 'high quality product',
    },

    {
      /*_id: '6',*/
      name: 'Planche Longbard Mark Phipps Caviar',
      slug: 'planche01_longbard_mark_phipps_caviar',
      category: 'Longboard',
      image: '/images/Longboard/planche01_longbard_mark_phipps_caviar.jpg',
      price: 550,
      countInStock: 5,
      brand: 'Mark Phipps Caviar',
      rating: 2.5,
      numReviews: 10,
      description: 'high quality product',
    },

    {
      /*_id: '7',*/
      name: 'Planche Longbard Vanon',
      slug: 'planche01_longbard_vanon',
      category: 'Longboard',
      image: '/images//Longboard/planche01_longbard_vanon.jpg',
      price: 570,
      countInStock: 5,
      brand: 'Vanon',
      rating: 3.5,
      numReviews: 10,
      description: 'high quality product',
    },

    {
      /*_id: '8',*/
      name: 'Planche Longbard Kudat Super',
      slug: 'planche02_longbard_kudat',
      category: 'Longboard',
      image: '/images/Longboard/planche02_longbard_kudat.jpg',
      price: 590,
      countInStock: 5,
      brand: 'Kudat',
      rating: 4,
      numReviews: 10,
      description: 'high quality product',
    },
    /*Derive*/
    {
      /*_id: '9',*/
      name: 'Derive Kudat, lot de 3',
      slug: 'Derive_Kudat',
      category: 'Derive',
      image: '/images/Derive/Derive01_Kudat.jpg',
      price: 75,
      countInStock: 5,
      brand: 'Kudat',
      rating: 5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      /*_id: '10',*/
      name: 'Derive Quicksilver, Lot de 3',
      slug: 'Derive_Quicksilver',
      category: 'Derive',
      image: '/images/Derive/Derive01_Quicksilver.jpg',
      price: 80,
      countInStock: 5,
      brand: 'Quicksilver',
      rating: 4,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      /* _id: '11',*/
      name: 'Derive Venon, Lot de 3',
      slug: 'Derive_Venon',
      category: 'Derive',
      image: '/images/Derive/Derive01_Venon.jpg',
      price: 105,
      countInStock: 5,
      brand: 'Venon',
      rating: 3,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      /*_id: '12',*/
      name: 'Derive Mark Phipps Caviar',
      slug: 'Derive_Mark_Phipps_Caviar',
      category: 'Derive',
      image: '/images/Derive/Deriuve01_Mark_Phipps_Caviar.jpg',
      price: 112,
      countInStock: 5,
      brand: 'Mark Phipps Caviar',
      rating: 3.5,
      numReviews: 10,
      description: 'high quality product',
    },

    /*Pads*/

    {
      /*_id: '13',*/
      name: 'Pads Kudat',
      slug: 'Pads_Kudat',
      category: 'Pads',
      image: '/images/Pads/Pads01_Kudat.jpg',
      price: 40,
      countInStock: 5,
      brand: 'Mark Phipps Caviar',
      rating: 4,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      /*_id: '14',*/
      name: 'Pads Quicksilver',
      slug: 'Pads_Quicksilver',
      category: 'Pads',
      image: '/images/Pads/Pads01_Quicksilver.jpg',
      price: 60,
      countInStock: 5,
      brand: 'Mark Phipps Caviar',
      rating: 5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      /*_id: '15',*/
      name: 'Pads Mark Phipps Caviar',
      slug: 'Pads_Mark_Phipps_Caviar',
      category: 'Pads',
      image: '/images/Pads/Pads01_Mark_Phipps_Caviar.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Mark Phipps Caviar',
      rating: 5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      /* _id: '16',*/
      name: 'Pads Venon',
      slug: 'Pads_Venon',
      category: 'Pads',
      image: '/images/Pads/Pads01_Venon.jpg',
      price: 55,
      countInStock: 5,
      brand: 'Mark Phipps Caviar',
      rating: 4,
      numReviews: 10,
      description: 'high quality product',
    },

    /*Combinaison */
    {
      /* _id: '17',*/
      name: 'Combinaison Kudat',
      slug: 'Combinaison01_Kudat',
      category: 'Combinaison',
      image: '/images/Combinaison/Combinaison01_Kudat.jpg',
      price: 119,
      countInStock: 5,
      brand: 'Kudat',
      rating: 3.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      /*_id: '18',*/
      name: 'Combinaison Quicksilver',
      slug: 'Combinaison01_Quicksilver',
      category: 'Combinaison',
      image: '/images/Combinaison/Combinaison01_Quicksilver.jpg',
      price: 115,
      countInStock: 5,
      brand: 'Quicksilver',
      rating: 5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      /*_id: '19',*/
      name: 'Combinaison Mark Phipps Caviar',
      slug: 'Combinaison01_Mark_Phipps_Caviar',
      category: 'Combinaison',
      image: '/images/Combinaison/Combinaison01_Mark_Phipps_Caviar.jpg',
      price: 110,
      countInStock: 5,
      brand: 'Mark Phipps Caviar',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      /*_id: '20',*/
      name: 'Combinaison Venon',
      slug: 'Combinaison01_Venon',
      category: 'Combinaison',
      image: '/images/Combinaison/Combinaison01_Venon.jpg',
      price: 129,
      countInStock: 5,
      brand: 'Venon',
      rating: 4,
      numReviews: 10,
      description: 'high quality product',
    },

    /*Leash*/
    {
      /*_id: '21',*/
      name: 'Leash Kudat',
      slug: 'Leash01_Kudat',
      category: 'Leash',
      image: '/images/Leash/Leash01_Kudat.jpg',
      price: 25,
      countInStock: 5,
      brand: 'Kudat',
      rating: 4,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      /*_id: '22',*/
      name: 'Leash Quicksilver',
      slug: 'Leash01_Quicksilver',
      category: 'Leash',
      image: '/images/Leash/Leash01_Quicksilver.jpg',
      price: 26,
      countInStock: 5,
      brand: 'Quicksilver',
      rating: 3.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      /*_id: '23',*/
      name: 'Leash Mark PhippsCaviar',
      slug: 'Leash01_Mark_Phipps_Caviar',
      category: 'Leash',
      image: '/images/Leash/Leash01_Mark_Phipps_Caviar.jpg',
      price: 29,
      countInStock: 5,
      brand: 'Venon',
      rating: 5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      /* _id: '24',*/
      name: 'Leash Venon ',
      slug: 'Leash01_Venon',
      category: 'Leash',
      image: '/images/Leash/Leash01_Venon.jpg',
      price: 31,
      countInStock: 5,
      brand: 'Venon',
      rating: 4,
      numReviews: 10,
      description: 'high quality product',
    },

    /*Wax*/
    {
      /* _id: '25',*/
      name: 'Wax Greenfix ',
      slug: 'Wax01_Greenfix',
      category: 'Wax',
      image: '/images/Wax/Wax01_Greenfix.jpg',
      price: 3.5,
      countInStock: 5,
      brand: 'Greenfix',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      /*_id: '26',*/
      name: 'Wax NKX ',
      slug: 'Wax01_NKX',
      category: 'Wax',
      image: '/images/Wax/Wax01_NKX.jpg',
      price: 4.99,
      countInStock: 5,
      brand: 'NKX',
      rating: 3.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      /* _id: '27',*/
      name: 'Wax Olaian ',
      slug: 'Wax01_Olaian',
      category: 'Wax',
      image: '/images/Wax/Wax01_Olaian.jpg',
      price: 4.8,
      countInStock: 5,
      brand: 'Olaian',
      rating: 4,
      numReviews: 10,
      description: 'high quality product',
    },

    {
      /* _id: '28',*/
      name: 'Go Pro Hero 11 Black ',
      slug: 'GoPro_Hero11',
      category: 'Camera',
      image: '/images/Camera/gopro-hero11-black.jpg',
      price: 440,
      countInStock: 50,
      brand: 'GoPro',
      rating: 5,
      numReviews: 10,
      description: 'Camera portable GoPro',
    },
    {
      /* _id: '29',*/
      name: 'Go Pro Hero 10 Black ',
      slug: 'GoPro_Hero10',
      category: 'Camera',
      image: '/images/Camera/gopro-hero10-black.jpg',
      price: 430,
      countInStock: 50,
      brand: 'GoPro',
      rating: 5,
      numReviews: 10,
      description: 'Camera portable GoPro',
    },
  ],
};

export const getComments = async () => {
  return [
    {
      id: '1',
      body: 'First comment',
      username: 'Bleu',
      userId: '1',
      parentId: null,
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '2',
      body: 'Second comment',
      username: 'Mirou',
      userId: '2',
      parentId: null,
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '3',
      body: 'First comment first child',
      username: 'Rayane',
      userId: '2',
      parentId: '1',
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '4',
      body: 'Second comment second child',
      username: 'test',
      userId: '2',
      parentId: '2',
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: '1',
    username: 'John',
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};

export default data;
