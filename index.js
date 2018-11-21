
const async = require('async');

function test() {
    // console.log('test')
    var queue = async.queue((task, callback) => {
        setTimeout(()=>{
            console.log(`${task.sitemap} - ${task.message}`)
            callback();
        }, 2000)
    }, 4);

    queue.drain = () =>{
        console.log('finished !!')
    }

    pushInQueue = (queue, config) => { 
        config.items.map(item => queue.push({sitemap: config.sitemap, message: item}))
    }
    pushInQueue(queue,{ sitemap: 'a.xml', items: ['test 1','test 2','test 3','test 4','test 5']});
    pushInQueue(queue,{ sitemap: 'b.xml', items: ['test 6','test 7','test 8','test 9','test 10']});
    pushInQueue(queue,{ sitemap: 'c.xml', items: ['test 11','test 12','test 13','test 14','test 15']});
    pushInQueue(queue,{ sitemap: 'd.xml', items: ['test 16','test 17','test 18','test 19','test 20']});
}
test();
