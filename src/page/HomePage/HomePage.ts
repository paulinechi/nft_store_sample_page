import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Header from './HeaderSection';
import ImageSection from './ImageSection';
import DescriptionHeader from './DescriptionHeader';
import DescriptionBody from './DescriptionBody';
import DescriptionBottom from './DescriptionBottom';

@Component({
  name: 'homepage',
  components: {
    'nft-header': Header,
    'image-section': ImageSection,
    'description-header': DescriptionHeader,
    'description-body': DescriptionBody,
    'description-bottom': DescriptionBottom,
  },
})
export default class HomePage extends Vue {
  public headerMenuDropDown: boolean = false;
  public descriptionMenuDropDown: boolean = false;

  public test: boolean = false;
  public selectedTab: string = 'Details';

  public changeTab(newTab: string): void {
    this.selectedTab = newTab;
  }
}
