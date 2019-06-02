import {BlogModel} from '../models/blog-model';
export class LocalBlogHelper {
    blogs: BlogModel[] = new Array<BlogModel>();
    constructor() {
        this.blogs.push(
            new BlogModel(
              'dum',
                ['t'], 4,
                'now test'
            )
        );
        this.blogs.push(
            new BlogModel(
              'Bundling Python with Shellscript',
            ['python', 'scripting', 'sh'], 3, `
            I'm very used to how java and other non-scripting languages handle things,
            where there is a main function ( or method of a main class ) and the execuatable
            is a single file with all the bundled library dependencies.
             
            There are likely ways around this that are done through pip libraries, but I went ahead and turned this 
            into an opportunity to use a bit of bash
            \`\`\`shell
                #!/bin/bash
                
                if [ $# -eq 0 ]
                then
                    name="themer"
                else
                    name=$1
                fi
                main_file="themer.py"
            
                mkdir themer
                cp $main_file ./themer/__main__.py
                cp $(ls *.py | grep -v $main_file) ./themer/
                cd ./themer
                zip ../$name $(ls *.py)
                cd ..
                
                if [ ! -d "output" ]
                then
                    mkdir output
                fi
                
                mv $name.zip ./output
                chmod 777 ./output/$name.zip
                rm -r themer
                mv ./output/$name.zip ./output/$name
            \`\`\`
            ---
            Ideally, you would want to replace the names of the files and directories with those that you are using
            in your python project. The main takeaway is that a zip file can be executed if it has a
            __main__.py python file. This effectively converts whatever python script you delegate as your main
            script and turns that into __main__.py after you create a zip file
            `)
        );
        this.blogs.push(
            new BlogModel(
              'kotlin is neat',
                ['kotlin', 'functional'], 9, `
                   
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
              'more kotlin stuff',
                ['kotlin', 'object orientation'], 9, `
                   
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
