import {BlogModel} from '../models/blog-model';
export class LocalBlogHelper {
    blogs: BlogModel[] = new Array<BlogModel>();
    constructor() {
        this.blogs.push(
            new BlogModel(
            ['python', 'object orientation'], 3, `
            ## Learning python
            \`\`\`python
                class Person:
                def __init__(self, name):
                    self.name = name
            \`\`\`
            `)
        );
        this.blogs.push(
            new BlogModel(
                ['kotlin', 'functional'], 9, `
                ## Kotlin is neat!
                ---
                Been **learning** a bit of kotlin and the functionality it offers over Java while still keeping the same
                libraries is amazing
                \`\`\`kotlin
                    class Ok() {
                        var n;
                        get() {
                            return field;
                        }

                    }
                \`\`\`
                `
            )
        );

        this.blogs.push(
            new BlogModel(
                ['kotlin', 'object orientation'], 9, `
                ## More Kotlin stuff!
                ---
                AMAZIN
                libraries is amazing
                \`\`\`kotlin
                    class Ok() {
                        var n;
                        get() {
                            return field;
                        }

                    }
                \`\`\`
                `
            )
        );
    }
    getBlogs() {
        return this.blogs;
    }
}
