import { v } from '@dojo/widget-core/d';
import { ThemeableMixin, theme } from '@dojo/widget-core/mixins/Themeable';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';

import * as css from './styles/TwitterShare.m.css';

export interface TwitterProperties {
  handle: string;
}

@theme(css)
export class TwitterShare extends ThemeableMixin(WidgetBase)<TwitterProperties> {
  
  tweet() {
    window.open(`https://twitter.com/intent/tweet?text=Check out this awesome site at ${location.href} from ${this.properties.handle}`, '_blank');
  }

  protected render() {
    return v(
      'button',
      {
        classes: this.classes(css.twitterShareButton),
        onclick: this.tweet
      },
      ['Tweet Me!']
    );
  }
}

export default TwitterShare;
