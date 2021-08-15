import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'description-body',
  components: {},
})
export default class DescriptionBody extends Vue {
  public headerMenuDropDown: boolean = false;
  public descriptionMenuDropDown: boolean = false;

  public test: boolean = false;
  public selectedTab: string = 'Details';

  public changeTab(newTab: string): void {
    this.selectedTab = newTab;
  }
}
