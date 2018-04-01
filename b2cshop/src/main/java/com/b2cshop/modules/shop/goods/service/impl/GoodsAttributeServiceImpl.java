package com.b2cshop.modules.shop.goods.service.impl;

import com.b2cshop.modules.shop.goods.dao.GoodsCategoryDao;
import com.b2cshop.modules.shop.goods.entity.GoodsCategoryEntity;
import com.google.common.collect.Maps;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.b2cshop.common.utils.PageUtils;
import com.b2cshop.common.utils.Query;

import com.b2cshop.modules.shop.goods.dao.GoodsAttributeDao;
import com.b2cshop.modules.shop.goods.entity.GoodsAttributeEntity;
import com.b2cshop.modules.shop.goods.service.GoodsAttributeService;


@Service("goodsAttributeService")
public class GoodsAttributeServiceImpl extends ServiceImpl<GoodsAttributeDao, GoodsAttributeEntity> implements GoodsAttributeService {

    @Autowired
    private GoodsCategoryDao goodsCategoryDao;

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<GoodsAttributeEntity> page = this.selectPage(
                new Query<GoodsAttributeEntity>(params).getPage(),
                new EntityWrapper<GoodsAttributeEntity>()
        );

        return new PageUtils(page);
    }

    @Override
    public PageUtils list(Map<String, Object> params) {
        PageUtils page = this.queryPage(params);
        //todo 优化，可以从缓存里面获取所以商品分类，修改商品分类之后重新缓存分类信息
        //获取所属分类名称
        List<GoodsCategoryEntity> list = goodsCategoryDao.selectList(null);
        Map<Integer, String> map = convertToMap(list);
        for (GoodsAttributeEntity attribute : (List<GoodsAttributeEntity>) page.getList()) {
            attribute.setTypeName(map.get(attribute.getTypeId()));
        }
        return page;
    }

    /**
     * list 转成 map
     *
     * @param list
     * @return
     */
    private Map<Integer, String> convertToMap(List<GoodsCategoryEntity> list) {
        HashMap<Integer, String> map = Maps.newHashMap();
        for (GoodsCategoryEntity category : list) {
            map.put(category.getId(), category.getName());
        }
        return map;
    }

}
