export class BlogModel {
    Title: string;
    Tags: string[];
    Date: Date;
    CoolFactor: number;
    Content: string;
    constructor(title, tags, coolfactor, content) {
      this.Title = title;
      this.Tags = tags;
      this.CoolFactor = coolfactor;
      this.Content = content;
    }

    clone(): BlogModel {
        const tmpModel = new BlogModel(this.Title, Object.assign([], {}, this.Tags), this.CoolFactor, this.Content);
        tmpModel.Title = this.Title;
        tmpModel.Date = this.Date;
        return tmpModel;
    }
}
