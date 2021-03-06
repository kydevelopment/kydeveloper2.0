import {IReadingItem, IResumeResponse, IMilestonesResponse} from './about.service'

var item1: IReadingItem = {
    id: "id1",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51szD9HC9pL._SX395_BO1,204,203,200_.jpg",
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vissides",
    promoUrl: "https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/ref=sr_1_3?ie=UTF8&qid=1532879329&sr=8-3&keywords=design+patterns&dpID=51szD9HC9pL&preST=_SX218_BO1,204,203,200_QL40_&dpSrc=srch",
    summary: `I am a fullstack web developer that specializes in automation and custom tooling within linux server environmnents. I can help save your business countless of billable hours so you can spend your time on what really matters.

    I am a fullstack web developer that specializes in automation and custom tooling within linux server environmnents. I can help save your business countless of billable hours so you can spend your time on what really matters. I am a fullstack web developer that specializes in automation and custom tooling within linux server environmnents. I can help save your business countless of billable hours so you can spend your time on what really matters. 
    
    I am a fullstack web developer that specializes in automation and custom tooling within linux server environmnents. I can help save your business countless of billable hours so you can spend your time on what really matters. T`,
    dateAdded: "10/22/2012",
    rating: 4,
    category: "development"
  }

var item2: IReadingItem = {
    id: "id2",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51JF95r45vL._SX379_BO1,204,203,200_.jpg",
    title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    author: "Robert C. Martin",
    promoUrl: "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure-ebook/dp/B075LRM681/ref=pd_sim_351_5?_encoding=UTF8&psc=1&refRID=F288CFD53WNJXT5RFK2G",
    summary: "This book is great",
    dateAdded: "10/23/2012",
    rating: 5,
    category: "development"
  }

  var item3: IReadingItem = {
    id: "id3",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51wl8cINKYL._SX382_BO1,204,203,200_.jpg",
    title: "Effective Java",
    author: "Joshua Bloch",
    promoUrl: "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure-ebook/dp/B075LRM681/ref=pd_sim_351_5?_encoding=UTF8&psc=1&refRID=F288CFD53WNJXT5RFK2G",
    summary: "This book is great",
    dateAdded: "10/1/2012",
    rating: 2,
    category: "development"
  }

var biography: string = `<p>Lorem ipsum dolor sit amet, populo tibique vituperatoribus mei id, vix te aliquip equidem dolores. Iudico nostro senserit ea pri. Ex labitur euismod aliquando quo, in quas noluisse vis. Eam cu civibus voluptatum cotidieque. Ex eos laboramus hendrerit scribentur, vim dicit dolore option cu. Ad case bonorum persecuti qui.
</p><p>
Ea sea brute putent, vim hinc aliquid platonem eu, conceptam percipitur at mel. In ignota cetero option sit, ludus persequeris vis ex, ut sed nihil cetero invidunt. Sit in reque accusam, ad dolorum invidunt has. Laudem adipisci mel et. An vis brute disputando. Qui ei nostrum consulatu interesset, modus iudicabit reprehendunt mel an. Ne nam dolor vocent torquatos.
</p>
<p><img src="https://media.wired.com/photos/59322df52a990b06268a9042/master/w_2560,c_limit/uber.jpg"></p>
<p>
Tota viderer ponderum est in, ut his viris evertitur, in quem veritus mel. Ius ex vero contentiones, at vivendo omnesque est. Quo malis legere concludaturque ad, id vix quis audire scriptorem, mazim iuvaret ne quo. Velit omittantur mel id, mea saperet laoreet an.
</p><p>
Cum quod delicatissimi id, id eum justo concludaturque, vim dolore tibique senserit ea. Ne ludus graece qui, eam tibique propriae in. Nam senserit intellegat et, ei indoctum accusamus eos. Et legere quaeque aliquam cum. Eu est singulis consequuntur, esse malis pro at. Ei purto accusam concludaturque eum, nam hinc reformidans no.
</p><p>
Per animal deserunt et, vim omnis harum simul eu, noster conceptam ut pri. Ea est tempor deleniti, per ad debitis consetetur posidonium. Cu blandit fastidii qui, ex aperiam reprimique quo. Dicta semper pro ea.
</p>`

var resume: IResumeResponse = {
  jobExperience: [
    {
      id: '1',
      business: 'LogMeIn',
      position: 'Software Developer',
      image: "https://pbs.twimg.com/profile_images/696718591685570564/ousEiWMV_400x400.png",
      startDate: 'April 2018',
      endDate: 'present',
      summary: 'Per animal deserunt et, vim omnis harum simul eu, noster conceptam ut pri. Ea est tempor deleniti, per ad debitis consetetur posidonium. Cu blandit fastidii qui, ex aperiam reprimique quo. Dicta semper pro ea.',
    },
    {
      id: '1',
      business: 'Jive Communications',
      position: 'Software Developer',
      image: "https://www.business.com/images/rev/prod/ce/55229-jive-communications-box.jpg",
      startDate: 'November 2013',
      endDate: 'April 2018',
      summary: 'Per animal deserunt et, vim omnis harum simul eu, noster conceptam ut pri. Ea est tempor deleniti, per ad debitis consetetur posidonium. Cu blandit fastidii qui, ex aperiam reprimique quo. Dicta semper pro ea.',
    }
  ],
  education: [
    {
      id: '1',
      school: 'BYU',
      degree: 'BA - Illustration',
      image: 'https://universe.byu.edu/wp-content/uploads/photo-gallery/Stretch%20Y%20Logo.jpg',
      startDate: 'August 2018',
      endDate: 'August 2013',
      summary: 'Per animal deserunt et, vim omnis harum simul eu, noster conceptam ut pri. Ea est tempor deleniti, per ad debitis consetetur posidonium. Cu blandit fastidii qui, ex aperiam reprimique quo. Dicta semper pro ea.',
    },
    {
      id: '1',
      school: 'UVU',
      degree: 'AS',
      image: 'https://www.logolynx.com/images/logolynx/0a/0a2ab0e20f168449618f9fc6be0b5169.jpeg',
      startDate: 'August 2006',
      endDate: 'August 2008',
      summary: 'Per animal deserunt et, vim omnis harum simul eu, noster conceptam ut pri. Ea est tempor deleniti, per ad debitis consetetur posidonium. Cu blandit fastidii qui, ex aperiam reprimique quo. Dicta semper pro ea.',
    }
  ],
  presentation: [
    {
      id: '1',
      event: 'NgConf 2018',
      title: 'Angular Redux Rocks',
      image: 'https://nitayneeman.com/images/thumbnails/ng-conf-2018.png',
      date: 'August 2018',
      summary: 'Per animal deserunt et, vim omnis harum simul eu, noster conceptam ut pri. Ea est tempor deleniti, per ad debitis consetetur posidonium. Cu blandit fastidii qui, ex aperiam reprimique quo. Dicta semper pro ea.', 
    }
  ]
}

var milestones: IMilestonesResponse = {
  milestones: [
    {
      date: '3/26/2015',
      content: 'Abigial was born weighing 13oz. She is a survivor.'
    },
    {
      date: '3/26/2015',
      content: 'Abigial was born weighing 13oz.'
    },
    {
      date: '3/26/2015',
      content: 'Abigial was born weighing 13oz.'
    },
    {
      date: '3/26/2015',
      content: 'Abigial was born weighing 13oz.'
    },
    {
      date: '3/26/2015',
      content: 'Abigial was born weighing 13oz.'
    },
  ]
}

export {
    item1,
    item2,
    item3,
    biography,
    resume,
    milestones
}