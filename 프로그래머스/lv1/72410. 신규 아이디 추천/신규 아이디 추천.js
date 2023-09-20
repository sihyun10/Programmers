function solution(new_id) {
    new_id = new_id
        .toLowerCase()
        .replace(/[~!@#$%^&*()=+{}\[\]:?,<>/]/g,'')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/, '');
    
    if(new_id.length === 0) {
        new_id = 'a';
    }
    
    if(new_id.length >= 16) {
        new_id = new_id.slice(0,15);
    }
    new_id = new_id.replace(/\.$/, '')
    
    if(new_id.length <= 2) {
        new_id = new_id + new_id[new_id.length -1].repeat(3 - new_id.length);
    }
    
    return new_id
}