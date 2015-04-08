<?php

class msComboBooleanType extends msOptionType implements msOptionTypeInterface {

    public function getValue($criteria) {
        /** @var msProductOption $value */
        $value = $this->xpdo->getObject('msProductOption', $criteria);
        return ($value) ? $value->get('value') : null;
    }

    public function setValue($criteria, $value) {

    }

    public function getField($field) {
        return "{xtype:'modx-combo-boolean'}";
    }

}

return 'msComboBooleanType';