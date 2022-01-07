        // 对象操作

        // 构造函数实例化对象
        function pliNewInstance(Fn, ...args) {
            let obj = {};
            let result = Fn.call(obj, ...args);
            obj.__proto__ = Fn.prototype
            return result instanceof Object ? result : obj
        }

        function Person(name, age) {
            this.name = name;
            this.age = age;
            return this.name + this.age
        }
        let p = pliNewInstance(Person, 'zs', 21);
        let p1 = new Person('ls', 22)
        // myInstanceOf(obj,Type) 判断obj是否是type类新的实例
        // Type的原型对象是否是obj的原型链上的某个对象，如果是返回true，否则返回false
        function pliInstanceOf(obj, Type) {
            let prototype = Type.prototype;
            let proto = obj.__proto__;
            while (proto) {
                if (proto === prototype) {
                    return true;
                }
                proto = proto.__proto__
            }
            return false
        }
        // 对象合并 mergeObject(...objs) 合并多个对象 返回合并后的对象，不改变原对象
        function pliMergeObj(...objs) {
            let result = {};
            objs.forEach(obj => {
                Object.keys(obj).forEach(key => {
                    if (result.hasOwnProperty(key)) {
                        result[key] = [].concat(result[key], obj[key])
                    } else {
                        result[key] = obj[key]
                    }
                })
            })
            return result;
        }
        // console.log(pliMergeObj(obj1, obj2));
        // 深浅拷贝
        function pliCopy(obj) {
            if (typeof obj === 'object') {
              let isArray = Array.isArray(obj);
              let res = isArray ? [] : {};
              if (isArray) {
                for (let i = 0; i < obj.length; i++) {
                  if (typeof obj[i] === 'object') {
                    res[i] = pliCopy(obj[i])
                  } else {
                    res[i] = obj[i]
                  }
                }
              } else {
                Object.keys(obj).forEach(key => {
                  if (typeof obj[key] === 'object') {
                    res[key] = pliCopy(obj[key])
                  } else {
                    res[key] = obj[key]
                  }
                })
              }
              return res;
            } else {
              return obj;
            }
          }

        module.exports={
            pliNewInstance,
            pliInstanceOf,
            pliMergeObj,
            pliCopy
        }