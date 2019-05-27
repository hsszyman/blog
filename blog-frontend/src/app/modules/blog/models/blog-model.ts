export class BlogModel {
    Title: string;
    Tags: string[];
    CoolFactor: number;
    Content: string;
    constructor(tags, coolfactor, content) {
        this.Tags = tags;
        this.CoolFactor = coolfactor;
        this.Content = content;
        
    }
}
