import { Component } from '@angular/core';
import { MainCardComponent } from '../main-card/main-card.component';
import { SideCardsComponent } from '../side-cards/side-cards.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainCardComponent, SideCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  newsList = [
    {
      title: `Cleyton Alves compartilha experiência no podcast da Uninassau`,
      shortDescription: 'Cleyton Alves fala sobre soft skills e inovação no podcast da Uninassau.',
      longDescription: `No último episódio do podcast da Uninassau, tive a honra de participar de um bate-papo enriquecedor com o Professor Richardson, explorando ideias de projetos inovadores e a importância dos soft skills na "venda" dessas ideias. Durante a conversa, compartilhei um pouco sobre minha trajetória, que começou na Administração e passou por diversas experiências que moldaram quem sou hoje. Já atuei na área comercial, onde aprendi a importância da comunicação clara e da construção de relacionamentos. Também tive a oportunidade de trabalhar diretamente com o público como instrutor de mergulho em Fernando de Noronha — uma experiência incrível onde precisava explicar aos turistas, de forma didática e tranquila, como se comportar debaixo d'água. Além disso, fui educador ambiental pelo Instituto Oceanário, levando conhecimento sobre preservação e respeito à natureza. Essa estrada diversa me ensinou muito sobre adaptação, empatia e a capacidade de transformar ideias em ações concretas. Acredito que essas habilidades são essenciais não só para o mercado de tecnologia, mas para qualquer área que exija inovação e colaboração. Foi uma experiência inspiradora compartilhar essas vivências e refletir sobre como cada etapa desse caminho contribuiu para o meu desenvolvimento pessoal e profissional. Agradeço à Uninassau pelo convite e ao Professor Richardson pela conversa instigante. Seguimos aprendendo e construindo novas possibilidades!`,
      image: 'https://res.cloudinary.com/drc12z85g/image/upload/v1741534296/podcast_yzlvlc.jpg',
      url: '#'
    },
    {
      title: 'Cleyton Alves palestra na Uninassau sobre soft skills e carreira em tecnologia',
      shortDescription: 'Cleyton Alves destaca a importância das soft skills em palestra na Uninassau.',
      longDescription: `Em uma palestra inspiradora na Uninassau, Cleyton Alves conquistou a plateia ao abordar um tema essencial, mas muitas vezes subestimado: a importância das soft skills para o sucesso profissional. Com uma trajetória rica e diversificada, ele trouxe exemplos reais de como habilidades como comunicação, trabalho em equipe e resiliência foram determinantes em sua caminhada.`,
      image: 'https://res.cloudinary.com/drc12z85g/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1741534190/palestra_ee71nn.jpg',
      url: '#'
    },
    {
      title: 'Decola Tech 2025: A Jornada de Cleyton Alves na Imersão de Tecnologia Avanade e DIO',
      shortDescription: 'Cleyton Alves se aprofunda em Java, Spring, Angular e Cloud no bootcamp Decola Tech 2025.',
      longDescription: `O Decola Tech 2025, promovido pela Avanade em parceria com a DIO, tem sido uma jornada de aprendizado intensa e transformadora para Cleyton Alves. Participando de cursos, mentorias e projetos práticos, ele vem se aprofundando em tecnologias essenciais para o mercado, como Java, Spring Framework, Angular e serviços em nuvem com foco em inteligência artificial.`,
      image: 'https://res.cloudinary.com/drc12z85g/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1741536163/winner_pkz81m.jpg',
      url: '#'
    },
  ];

  mainNews = this.newsList[0];
  sideNews = this.newsList.slice(1);

  setMainNews(news: any) {
    this.sideNews.push(this.mainNews);
    this.mainNews = news;
    this.sideNews = this.sideNews.filter(item => item !== news);
  }
}
