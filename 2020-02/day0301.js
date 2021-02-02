// 寻找两个最近的共同父节点
const commonParentNode = (oNode1,oNode2) => {
  if(oNode2.contains(oNode1) || oNode1.contains(oNode2)) {
    return oNode2.contains(oNode1) ? oNode2 : oNode1
  }
  for (;oNode1;oNode1 = oNode1.parentNode) {
    if(oNode1.contains(oNode2)) return oNode1
  }
}