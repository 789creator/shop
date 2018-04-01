package com.b2cshop.modules.shop.goods.service.impl;

import com.b2cshop.common.utils.PageUtils;
import com.b2cshop.common.utils.Query;
import com.b2cshop.modules.shop.goods.dao.GoodsCategoryDao;
import com.b2cshop.modules.shop.goods.dao.SpecDao;
import com.b2cshop.modules.shop.goods.entity.GoodsCategoryEntity;
import com.b2cshop.modules.shop.goods.entity.SpecEntity;
import com.b2cshop.modules.shop.goods.service.SpecService;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.google.common.collect.Maps;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service("specService")
public class SpecServiceImpl extends ServiceImpl<SpecDao, SpecEntity> implements SpecService {

    @Autowired
    private GoodsCategoryDao goodsCategoryDao;

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<SpecEntity> page = this.selectPage(
                new Query<SpecEntity>(params).getPage(),
                new EntityWrapper<SpecEntity>()
        );

        return new PageUtils(page);
    }

    @Override
    public PageUtils list(Map<String, Object> params) {
        Page<SpecEntity> page = this.selectPage(
                new Query<SpecEntity>(params).getPage(),
                new EntityWrapper<SpecEntity>()
        );

        //todo 缓存中获取 map
        List<GoodsCategoryEntity> list = goodsCategoryDao.selectList(null);
        Map<Integer, String> map = listToMap(list);
        for (SpecEntity spec : page.getRecords()) {
            spec.setCatId1Name(map.get(spec.getCatId1()));
            spec.setCatId2Name(map.get(spec.getCatId2()));
            spec.setCatId3Name(map.get(spec.getCatId3()));
        }
        return new PageUtils(page);
    }

    private Map<Integer, String> listToMap(List<GoodsCategoryEntity> list) {
        HashMap<Integer, String> map = Maps.newHashMap();
        for (GoodsCategoryEntity category : list) {
            map.put(category.getId(), category.getName());
        }
        return map;
    }
}
