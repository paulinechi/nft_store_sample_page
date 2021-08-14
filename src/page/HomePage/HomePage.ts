// @vue/component
// export default {
//   name: 'HomePage',
// };

import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { BDropdown, BDropdownItem } from 'bootstrap-vue';

Vue.component('b-dropdown', BDropdown);
Vue.component('b-dropdown-item', BDropdownItem);

// import {
//     IssueFilterInterface,
//     IssueInterface,
//     IssuesConfigInterface,
//     PaginationInterface,
// } from '@/store/modules/issues/types';
// import {Action, Getter, State} from 'vuex-class';
// import {SearchByType, StatusType} from '@/store/modules/search/types';
// import {IssueListSelected} from '@/components/IssuesList/types';
// import IssueVote from '@/components/IssueVote/index.vue';
// import IssueTitleInfo from '@/components/IssueTitleInfo/index.vue';
// import {GameInterface, GamePlatformInterface} from '@/store/modules/games/types';
// import Loading from '@/components/Loading/index.vue';
// import {LoadingState, LoadingStateInterface} from '@/components/Loading/types';
// import {ReportStageInterface} from '@/store/modules/form/types';

// const namespace: string = 'issuesStateModule';

// Vue.use(BootstrapVue, DropdownPlugin)

@Component({
  name: 'homepage',
  components: {
    'b-dropdown': BDropdown,
    'b-dropdown-item': BDropdownItem,

    // 'c-issue-vote': IssueVote,
  },
})
export default class HomePage extends Vue {
  public currentPage: number = 1;
  public searchString: string = '';
  public selectedStatus: number = 0;
  public versionList: any = [];
  public currentRoute: string = '';
  public numberOfVoteLeft: number = 0;
  public sortByKey: number = 1;
  public versionKey: any = '';
  public categoryKey: any = '';
  private timeout: number = 0;

  public headerMenuDropDown: boolean = false;
  public descriptionMenuDropDown: boolean = false;

  public test: boolean = false;
}
