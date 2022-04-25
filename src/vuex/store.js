import { createStore } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import Question from '../js/classes/question';

export default createStore({
  state: {
    questions: [new Question()],
    passage: '',
    examples: [
      {
        passage: "Xylitol is also known as birch sugar. Xylitol tastes just as sweet as sugar, and you can replace it one-to-one in recipes. But why should you do that? Birch sugar has some positive advantages over table sugar. On the one hand, it is tooth-friendly and even has a non-cariogenic effect, i.e. it does not cause caries. Secondly, xylitol is particularly popular because of its low glycemic index. It has a glycemic index of 7 to 11, while that of regular sugar is 65 to 100. So if you want to consciously avoid the negative properties of sugar, but not its sweetness, you should give xylitol a try. However, in moderation, because in high doses it can have a laxative effect. Birch sugar should also be kept away from dogs, as it can even be fatal for the four-legged friends.",
        questions: [
          "What is xylitol?",
          "What is the advantage of birch sugar?",
          "What is the glycemic index of xylitol?",
        ]
      },
      {
        passage: "The iPhone SE (2020) scores very well in the test and allows Apple fans to dive into the iPhone world for less money. The performance is excellent and the battery lasts for a really long time. The camera also does a decent job, but has to admit defeat to the top models. iPhone SE packs Apple's powerful A13 Bionic chip into Apple's most popular size at a most affordable price. It’s just what you’ve been waiting for. It has a height of 138.4 mm, a width of 67.3 mm and a depth of 7.3 mm. It starts at $399.",
        questions: [
          "What chip is in the iPhone SE?",
          "What is the starting price of iPhone SE?",
        ]
      },
      {
        passage: "The Apache Lucene project develops open-source search software. The project releases a core search library, named Lucene core, as well as the Solr search server. Solr is a high performance search server built using Lucene Core. Solr is highly scalable, providing fully fault tolerant distributed indexing, search and analytics. It exposes Lucene's features through easy to use JSON/HTTP interfaces or native clients for Java and other languages.",
        questions: [
          "How can I connect to the search server?"
        ]
      },
    ]
  },

  getters,
  mutations,
})
