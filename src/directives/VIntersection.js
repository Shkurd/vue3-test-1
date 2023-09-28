
// Название директив начинается с "V" - VIntersection

export default {

  name: 'intersection',
  
  mounted(el, binding) { // кроме первого элемента обычно есть еще второй параметр, который мы называем (чаще всего) "binding" там будет лежать (для нашего случая) функция, которыу мы передаем в элементе где используем директиву v-intrsection и потом можем использовать в текущем коде тут. Например так - binding.value() т.к. она идет в поле value
    console.log(el, binding)

      const options = {
        rootMargin: "0px",
        threshold: 1.0,
      };
  
      const callback = (entries) => {
        if(entries[0].isIntersecting) {//срабатывает при пересечении вниз, по дефорту в обе стороны срабатывает пересечение
          binding.value()
        }
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(el)
  }
}