import "./style";
import { PageBase } from "mini-program-base";
import { IData } from "./__interface__/vo";

export default class IndexView extends PageBase<IData> {
  data: IData = {
    welcomeStr: "Index Page",
  };

  onLoad(): void {
    console.log("onLoad: ", this);
  }
}

PageBase.render(new IndexView());
