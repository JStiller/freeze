var jstiller = jstiller || {};
jstiller.modules = jstiller.modules || {};

jstiller.modules.freeze = (function (dependency) {
  var nodeBody = dependency.dom.find('body');

  /**
   * freezes the body node, triggered by the delivered node
   * 
   * @param {object} deliveredNode
   * @return {object}
   */
  function element(deliveredNode) {
    if(deliveredNode.nodeName === 'INPUT' && deliveredNode.getAttribute('type') === 'checkbox') {
      deliveredNode.addEventListener('change', function() {
        if(typeof nodeBody.style.overflow === 'undefined') {
          nodeBody.style.overflow = "hidden";
        } else {
          nodeBody.style.overflow = nodeBody.style.overflow === 'hidden' ? 'inherit' : 'hidden';
        }
      }, false);
    } else {
      throw new TypeError();
    }

    return this;
  }

  return {
    element: element
  };
}({
  document: document,
  dom: jstiller.dom,
}));
