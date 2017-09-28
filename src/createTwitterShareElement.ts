import { CustomElementDescriptor } from '@dojo/widget-core/customElements';
import TwitterShare from './widgets/TwitterShare';

export default function createTwitterShareElement(): CustomElementDescriptor {
    return {
        tagName: 'twitter-share',
        widgetConstructor: TwitterShare,
           attributes: [
               {
                   attributeName: "handle", // <twitter-share handle="@odoenet"/>
                   propertyName: "handle"
               }
           ]
   };
};