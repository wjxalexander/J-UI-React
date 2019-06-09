let importAll = (requireContext) => requireContext.keys().forEach(requireContext);
try{
    importAll(require.context('SvgRepo',true,/\.svg$/))
}catch (e) {
    // console.log(e)
}